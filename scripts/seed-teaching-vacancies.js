const fs = require("fs");
const path = require("path");
const { supabase, supabaseConfigured } = require("../supabase");

async function main() {
  if (!supabaseConfigured) {
    console.log("[vacancy-seed] Supabase is not configured; keeping the local seed available.");
    return;
  }

  const files = ["uae-january-2027-seed.json", "usa-teaching-vacancies-seed.json", "uk-teaching-vacancies-seed.json", "canada-teaching-vacancies-seed.json", "australia-teaching-vacancies-seed.json"].map(name => path.join(__dirname, "..", "backend-data", name));
  const seed = files.flatMap(file => JSON.parse(fs.readFileSync(file, "utf8")));
  const rows = seed.map(v => ({
    id: String(v.id),
    title: String(v.title || "").trim(),
    school: String(v.school || "").trim(),
    country: String(v.country || "").trim(),
    region: String(v.region || "").trim(),
    subject: String(v.subject || "").trim(),
    level: String(v.level || "").trim(),
    employment: String(v.employment || "").trim(),
    salary: String(v.salary || "").trim(),
    deadline: String(v.deadline || "").trim(),
    description: String(v.description || "").trim(),
    requirements: String(v.requirements || "").trim(),
    apply_url: String(v.apply_url || "").trim(),
    featured: Boolean(v.featured),
    status: "published",
    source: String(v.source || "").trim(),
    verified_date: String(v.verified_date || "").trim(),
    why_match: String(v.why_match || "").trim(),
    documents: String(v.documents || "").trim(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }));

  const { data, error } = await supabase
    .from("teaching_vacancies")
    .upsert(rows, { onConflict: "id" })
    .select("id,title,status");

  if (error) {
    const message = String(error.message || error);
    if (/could not find the table|relation .* does not exist|schema cache/i.test(message)) {
      console.warn("[vacancy-seed] teaching_vacancies table is not present in Supabase yet. The local seed will continue to power the public board.");
      return;
    }
    throw new Error("[vacancy-seed] Supabase teaching_vacancies upsert failed: " + message);
  }

  console.log("[vacancy-seed] Upserted " + (data || []).length + " international teaching vacancies into teaching_vacancies.");
}

main().catch(error => {
  console.error(error.message || error);
  process.exit(1);
});
