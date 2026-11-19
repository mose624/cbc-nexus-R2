/* Kenya CBC/CBE English Language Activities, Grades 1-3.
 * Original practice MCQs aligned to KICD's revised 2024 curriculum design.
 * Not official KNEC examination items. Grammar is assessed implicitly, as directed by KICD.
 */
"use strict";
const source = "https://kicd.ac.ke/wp-content/uploads/2024/10/Grade-1-3-English-Activities-Revised-Sept.pdf";
const rows = [
  ["Grade 1","Greetings","Listening and Speaking","Pronunciation and vocabulary","It is 8.00 a.m. You meet your teacher. What is a polite greeting?",["Good morning","Good night","Goodbye yesterday","See you last week"],0,"“Good morning” is an appropriate greeting in the morning.","Theme 1.0 Greetings"],
  ["Grade 1","Greetings","Language Use","Verb ‘to be’ – Present Tense","Choose the sentence that correctly introduces Amina.",["I am Amina.","I is Amina.","I are Amina.","I be Amina."],0,"“I am Amina” is the correct way to introduce oneself.","Theme 1.0 Greetings"],
  ["Grade 1","Greetings","Reading","Pre-reading","What should you do before reading a book?",["Sit comfortably and position the book well","Hold the book upside down","Lie on the floor with the book far away","Tear out the pages"],0,"A comfortable posture and a well-positioned book help prepare a learner for reading.","Theme 1.0 Greetings"],
  ["Grade 1","School","Listening and Speaking","Pronunciation and vocabulary","Which word names a person who teaches learners at school?",["Teacher","Desk","Gate","Book"],0,"A teacher guides learners during learning activities.","Theme 2.0 School"],
  ["Grade 1","Writing","Writing","Pre-writing","Which action helps you prepare for writing?",["Hold your pencil correctly and sit well","Write while running","Hold the pencil with your feet","Keep the book far from your eyes"],0,"Correct sitting posture and pencil grip prepare the learner for writing.","Theme 2.0 School"],

  ["Grade 2","School","Listening and Speaking","Pronunciation and Vocabulary","Which word begins with the letter-sound combination “bl” as in the KICD examples?",["Blue","Spoon","School","Sky"],0,"“Blue” begins with the /bl/ combination taught in the Grade 2 design.","Theme 1.0 School"],
  ["Grade 2","School","Reading","Fluency","When reading aloud, what helps a listener understand the meaning?",["Reading accurately with suitable expression","Rushing and skipping words","Speaking so softly that no one hears","Changing words without noticing"],0,"Accurate, expressive reading supports meaning and communication.","Theme 1.0 School"],
  ["Grade 2","School","Reading","Comprehension","A story title is “The Lost Puppy”. What is a sensible prediction before reading?",["The story may be about a puppy that cannot be found","The story is certainly about a flying bus","The story has no characters","The story must be about cooking"],0,"The title gives a clue that the story may describe a missing puppy; reading confirms the prediction.","Theme 1.0 School"],
  ["Grade 2","Activities in the Home","Language Use","Verb ‘to be’ – Past Tense","Yesterday, the children ___ at home.",["were","is","am","are"],0,"“Were” is used with the plural subject “children” when talking about yesterday.","Theme 2.0 Activities in the Home"],
  ["Grade 2","Activities in the Home","Writing","Handwriting","Which letters usually extend below the writing line in words such as “playing” and “jumping”?",["The descending parts of letters such as g and p","All capital letters","Only the letter o","Every vowel"],0,"Letters such as g and p have parts that descend below the line; forming them neatly supports legibility.","Theme 2.0 Activities in the Home"],

  ["Grade 3","Reading","Reading","Comprehension","Read: “Wanjiku planted two trees. She watered them every evening. After some weeks, the trees had new leaves.” What helped the trees grow?",["Planting them and watering them regularly","Keeping them in a dark room","Removing all their leaves","Never giving them water"],0,"The passage says Wanjiku planted and watered the trees; these actions supported their growth.","Reading comprehension"],
  ["Grade 3","Language Use","Language Use","Tense and sentence structures","Choose the sentence that tells us about an action that happened yesterday.",["We visited our grandmother yesterday.","We visit our grandmother tomorrow.","We are visiting now.","We will visit next week."],0,"“Visited” tells about an action completed in the past.","Language Use"],
  ["Grade 3","Writing","Writing","Punctuation","Which sentence is correctly punctuated?",["Where is my book?","Where is my book.","where is my book?","Where is my book,"],0,"A direct question begins with a capital letter and ends with a question mark.","Writing"],
  ["Grade 3","Listening and Speaking","Listening and Speaking","Pronunciation and vocabulary","Your classmate is explaining how to care for a book. What should you do?",["Listen attentively and respond politely","Interrupt repeatedly","Laugh before the classmate finishes","Walk away while they speak"],0,"Attentive listening and respectful responses support effective communication.","Listening and Speaking"],
  ["Grade 3","Writing","Writing","Guided Writing","Which detail makes a short description of your school clearer?",["The school has a library, classrooms and a playground.","It is a thing.","There is something somewhere.","I saw it once."],0,"Specific details help a reader form a clear picture of the school.","Writing"]
].map((r,i)=>({
  id:"ke-cbc-english-"+r[0].toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+String(i+1).padStart(2,"0"),
  country:"Kenya",curriculum:"Kenya CBC/CBE",grade:r[0],subject:"English Language Activities",
  topic:r[1],strand:r[2],substrand:r[3],question:r[4],options:r[5],correctIndex:r[6],explanation:r[7],
  difficulty:"Foundational application",published:true,source,sourceName:"KICD Primary School Education Curriculum Design — English Language Activities, Grades 1–3 (Revised 2024)",
  createdAt:"2026-11-19T00:00:00.000Z",updatedAt:"2026-11-19T00:00:00.000Z"
}));
module.exports = rows;
