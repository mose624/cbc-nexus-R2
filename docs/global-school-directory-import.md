# Global school directory data import

The country pages can load records from `data/global-schools/<country-slug>.json`.

## Import a dataset

1. Obtain a downloadable dataset from an official education authority or a source with explicit reuse terms.
2. Keep the original download and source documentation.
3. Run:

```sh
node scripts/import-global-schools.js \
  --country india \
  --input /path/to/schools.csv \
  --source "Name of source dataset" \
  --source-url "https://official-source.example/dataset" \
  --license "Licence exactly as published"
```

JSON inputs may be an array of school objects or an object containing a `schools` array. CSV input must be UTF-8 and quoted correctly. Common school-name, identifier, location, grade, website and phone columns are mapped automatically; original columns are preserved in `source_record`.

## Publication rules

- Never fabricate entries to reach a target.
- Check licence terms before redistribution; public availability is not automatically an open licence.
- Deduplication uses a source ID when available; otherwise it uses normalized name plus available locality fields.
- Confirm country/region names and dataset dates. Source coverage is not necessarily a census.
- If a country has fewer than 1,000 genuine records, publish the available verified count rather than padding the list.
- The importer prepares local JSON files; it does not download datasets automatically or certify each record.
