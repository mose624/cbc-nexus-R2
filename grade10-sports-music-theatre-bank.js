/* Original Grade 10 Sports and Recreation, Music and Dance, and Theatre and Film practice.
   Contextual teacher-formulated questions aligned to broad learning outcomes; not official KNEC papers.
*/
"use strict";
const sportsRows = [
["Physical fitness","Components of fitness","A learner can run for a long time but struggles to lift a moderate load safely. Which fitness component needs particular development?","Muscular strength, developed progressively with correct technique and appropriate resistance."],
["Physical fitness","Training principles","A team increases running distance from 2 km to 10 km overnight and several learners become injured. Which principle was neglected?","Progressive overload; training demands should increase gradually to allow adaptation."],
["Physical fitness","Warm-up","A sprinter begins maximum-speed runs without preparation. Why is a warm-up important?","It gradually raises body temperature and prepares muscles, joints and the cardiovascular system for activity."],
["Physical fitness","Recovery","A learner trains intensely every day and performance keeps declining. What adjustment is most appropriate?","Plan adequate recovery, sleep and varied training load to reduce overtraining risk."],
["Physical fitness","Pulse rate","A learner's pulse is high immediately after a race and gradually falls during recovery. What does this show?","Heart rate responds to exercise demand and declines as the body recovers."],
["Games and tactics","Football tactics","A football team repeatedly loses possession because all players crowd the ball. What tactical change may help?","Spread out, create passing lanes and maintain support positions to use space effectively."],
["Games and tactics","Basketball","A basketball team has little time left and is behind by two points. Why might a well-selected shot near the basket be preferable to a rushed long-range attempt?","It may offer a higher-probability scoring opportunity, depending on the defence and remaining time."],
["Games and tactics","Volleyball","A team cannot control powerful serves. Which skill should players practise to improve the first contact?","A stable forearm pass with correct body position and platform angle."],
["Games and tactics","Netball","A netball player repeatedly steps after catching the ball. What should the coach emphasise?","Land under control, establish the landing foot and pass or shoot within the rules."],
["Games and tactics","Athletics","A relay team loses time at each baton exchange despite fast runners. What is the best improvement?","Practise legal, well-timed exchanges and communication in the designated exchange zone."],
["Rules and officiating","Fair play","A player disputes a referee decision and encourages teammates to stop playing. What response best demonstrates sportsmanship?","Respect the official, continue competing fairly and raise concerns through the appropriate channel."],
["Rules and officiating","Safety rules","A learner is asked to play without required protective equipment. What should the learner do?","Do not participate until suitable equipment is available and the activity is safe."],
["Rules and officiating","Officiating","Two officials give conflicting decisions during a school match. What should resolve the issue?","Use the competition's agreed rules and communication procedure, with the designated official making the final ruling."],
["Rules and officiating","Competition integrity","A coach asks an athlete to deliberately lose a match for a reward. What is the ethical response?","Reject match manipulation and report the request through the proper sporting authority."],
["Health and safety","Hydration","A learner becomes dizzy during exercise on a hot day. What should the supervisor prioritise?","Stop activity, move the learner to a safe cool place, assess symptoms and provide appropriate help and fluids if safe."],
["Health and safety","Heat illness","An athlete is confused and extremely hot after prolonged exercise. What is the concern?","Possible exertional heat stroke, a medical emergency requiring urgent emergency response and rapid cooling by trained helpers."],
["Health and safety","Injury management","A player twists an ankle and cannot bear weight. What should happen?","Stop play, protect the injured area and arrange appropriate medical assessment rather than forcing the player to continue."],
["Health and safety","Concussion","A learner is hit on the head and feels confused but wants to return to play. What is appropriate?","Remove the learner from play and arrange assessment; no same-day return if concussion is suspected."],
["Health and safety","Facility inspection","A volleyball court has a loose net post and a wet playing surface. What should the teacher do?","Keep learners off the court until the equipment and surface hazards are corrected."],
["Movement skills","Coordination","A beginner struggles to catch a ball because they close their eyes just before contact. Which practice may help?","Use progressive catching drills that develop visual tracking, timing and relaxed hand positioning."],
["Movement skills","Balance","A gymnast loses balance when landing. What should the instructor emphasise?","Controlled landing with suitable body alignment, bent knees and progressive practice on safe surfaces."],
["Movement skills","Throwing","A learner throws a javelin-like training implement across a crowded field. What must be established first?","A controlled throwing area, clear retrieval procedure and supervision so no person enters the landing zone."],
["Sports leadership","Team roles","A talented player ignores the team's agreed plan and blames others after defeat. What should a captain encourage?","Shared goals, respectful communication, accountability and cooperation."],
["Sports leadership","Inclusive participation","A school team excludes a learner with a mild disability despite an adaptable activity. What should the teacher consider?","Reasonable adaptations that preserve safety and meaningful participation for all learners."],
["Sports leadership","Event planning","A school sports day has no first-aid plan or drinking-water point. What should organisers do before the event?","Complete a risk assessment and arrange first aid, hydration, supervision and emergency communication."],
["Sports science","Nutrition","An athlete eats a very heavy meal immediately before a high-intensity race and feels uncomfortable. What is a better general strategy?","Plan familiar balanced meals and timing that allow digestion and meet the athlete's energy needs."],
["Sports science","Performance data","A coach records sprint times weekly under different track and weather conditions. What should be considered before comparing results?","Standardise or record test conditions so changes are not wrongly attributed to training alone."],
["Recreation","Outdoor activity","A hiking group plans a route without checking weather, water or return time. What is the key planning improvement?","Assess route difficulty and weather, carry suitable supplies and set communication and turnaround plans."],
["Recreation","Environmental care","Learners leave plastic bottles and food wrappers at a recreation site. What principle should guide better practice?","Leave the site clean, remove waste and minimise damage to the environment."],
["Personal development","Goal setting","A learner wants to improve a 100 m time but has no baseline or plan. What makes the goal more useful?","Set a measurable, realistic target with a time frame and a safe training plan to review progress."]
];
const musicRows = [
["Music elements","Rhythm","A school choir repeatedly enters late because singers cannot feel the beat. Which activity may help?","Practise a steady pulse with clapping or percussion before adding the melody."],
["Music elements","Tempo","A conductor gradually increases the speed of a song. Which musical element changes?","Tempo, the speed at which the music is performed."],
["Music elements","Dynamics","A song's chorus should sound stronger than the verse without changing the melody. Which instruction is relevant?","Increase the dynamics or loudness during the chorus as planned."],
["Music elements","Pitch","A learner sings consistently below the reference note. What skill should be developed?","Pitch matching through careful listening, vocal exercises and repeated practice with a reliable reference."],
["Music elements","Timbre","A listener distinguishes a flute from a drum even when both play the same rhythm. Which feature helps?","Timbre, the distinctive tone colour of an instrument or voice."],
["Music performance","Ensemble balance","The drums drown out singers during a school performance. What should the group adjust?","Balance the ensemble by changing instrument levels, dynamics, positioning or amplification."],
["Music performance","Rehearsal","A band repeats the whole piece but the same transition keeps failing. What rehearsal strategy is more effective?","Isolate the difficult passage, practise it slowly and then reintegrate it into the full piece."],
["Music performance","Stage readiness","A performer arrives without checking the instrument or equipment. What should a performance checklist include?","Instrument condition, tuning, accessories, sound check, entry cues and backup arrangements."],
["Music performance","Vocal health","A singer shouts through rehearsals and develops hoarseness. What is the safer approach?","Use healthy vocal technique, warm up, hydrate, rest and seek advice if symptoms persist."],
["Music performance","Notation","A learner sees a rest symbol in a melody but continues singing. What should the learner do?","Observe the rest for its written duration while maintaining internal pulse."],
["Traditional music","Cultural context","A class performs a community song without learning its meaning or context. What would improve the performance?","Research its cultural purpose, language, appropriate performance practices and community perspectives."],
["Traditional music","Instruments","Learners choose a traditional instrument for a school performance. What should guide their selection?","Consider the musical role, cultural context, available skill, sound and respectful handling of the instrument."],
["Composition","Motif","A learner wants a short musical idea to unify a song. What can be developed and repeated with variation?","A motif, a brief recognisable musical idea."],
["Composition","Structure","A song has no clear contrast and listeners cannot distinguish sections. What compositional decision could help?","Plan contrasting sections such as verse and chorus using melody, rhythm, dynamics or texture."],
["Composition","Lyrics","A learner writes lyrics that stereotype a community. What should guide revision?","Use respectful language, check factual and cultural assumptions, and consider the impact on the people represented."],
["Music technology","Recording","A classroom recording contains loud background conversations. What is the most direct way to improve the next recording?","Choose a quieter space, place the microphone appropriately and monitor sound during recording."],
["Music technology","Microphone technique","A singer moves far from the microphone during quiet phrases. What is likely to happen?","The recorded voice level may become inconsistent and background noise more noticeable."],
["Music technology","Copyright","A student uploads a commercial song recording as their own work. What issue arises?","Copyright and attribution rights may be infringed; use authorised material and credit contributions accurately."],
["Music technology","Editing","A recording has a sudden click between two joined audio clips. What should the editor try?","Make a clean edit and use a suitable short crossfade where appropriate."],
["Music appreciation","Listening","A learner describes a piece only as 'nice' and cannot explain why. What would make the response stronger?","Refer to audible evidence such as tempo, dynamics, instrumentation, texture, melody and mood."],
["Music appreciation","Genre","Two songs share instruments but have different rhythmic patterns and performance conventions. What should a learner consider when identifying genre?","Consider a combination of rhythm, structure, instrumentation, style and cultural context rather than one feature alone."],
["Dance","Movement quality","A dance group loses synchronisation during a fast sequence. What practice can help?","Break the sequence into counts, rehearse slowly and use clear cues before increasing speed."],
["Dance","Space","Dancers repeatedly collide during a formation change. What should be redesigned?","Spacing, pathways, orientation and transition timing, with safe rehearsal before performance."],
["Dance","Expression","A choreographer wants movement to communicate a story rather than merely repeat steps. What should guide choices?","Use gesture, dynamics, level, direction and timing to express the intended meaning."],
["Dance","Warm-up and safety","A dancer attempts a difficult jump before warming up. What is the safer preparation?","Use a progressive warm-up and practise prerequisite strength, flexibility and landing technique."],
["Dance","Cultural respect","A dance is borrowed from another community and presented with inaccurate costume and meaning. What should the group do?","Seek reliable guidance, acknowledge the source and represent the tradition respectfully."],
["Assessment","Performance criteria","Judges score a choir only on volume. Why is this incomplete?","Assessment should include relevant criteria such as pitch, rhythm, blend, diction, interpretation and presentation."],
["Assessment","Reflection","After a concert, learners only discuss mistakes and ignore what worked. What reflection approach is better?","Identify strengths, evidence of success and specific next steps for improvement."],
["Music careers","Collaboration","A sound technician and performers disagree about volume during rehearsal. What is the best way forward?","Discuss the artistic goal, test levels together and agree on safe, balanced sound."],
["Music careers","Event planning","A concert is scheduled but no one has confirmed the order of acts or stage changes. What document would help?","A running order with timings, cues, stage requirements and responsible people."]
];
const theatreRows = [
["Drama foundations","Character","An actor portrays a strict headteacher only by shouting in every scene. How can the character become more believable?","Vary voice, gesture, posture, pace and reactions according to the character's objectives and circumstances."],
["Drama foundations","Conflict","A scene has dialogue but no tension or change. What could make it more dramatic?","Introduce a clear conflict, obstacle or decision that changes the situation for the characters."],
["Drama foundations","Improvisation","During improvisation, one actor rejects every idea offered by the partner. Why does the scene stall?","The actors are not building on each other's offers; accepting and developing ideas helps the scene progress."],
["Drama foundations","Voice","An audience at the back cannot hear a performer speaking normally. What should the actor practise?","Projection, articulation and breath support without straining the voice."],
["Drama foundations","Movement","An actor's body language contradicts the words of a frightened character. What should be adjusted?","Align gesture, posture, facial expression and movement with the character's emotional state or make the contradiction intentional."],
["Script and storytelling","Plot","A short play introduces many characters but does not resolve its central problem. What should the writer review?","Clarify the central conflict and shape the events toward a purposeful resolution."],
["Script and storytelling","Dialogue","Characters explain information they both already know, making the conversation unnatural. What would improve it?","Use dialogue that reveals motives, relationships or new information naturally and economically."],
["Script and storytelling","Subtext","A character says 'I am fine' while avoiding eye contact after a loss. What may the actor communicate through subtext?","The character may be concealing grief or distress beneath the spoken words."],
["Script and storytelling","Adaptation","A group adapts a story from a local community but removes its context and changes its meaning. What should guide adaptation?","Preserve key themes, understand the source context and make changes thoughtfully and transparently."],
["Script and storytelling","Audience","A comedy relies on jokes that humiliate a learner's disability. What should the writers consider?","Revise the humour to avoid harmful stereotyping and retain comedy without targeting a vulnerable person."],
["Stagecraft","Lighting","The audience cannot see a key action because the actor stands outside the lit area. What should the team do?","Adjust blocking or lighting cues so the action remains visible and safe."],
["Stagecraft","Sound","A sound effect starts after the character has reacted to it. What rehearsal tool can prevent this?","Use a cue sheet and rehearse the timing between the operator and performer."],
["Stagecraft","Props","A prop needed in the final scene cannot be found during a run-through. What system helps?","Use a labelled prop list, assigned responsibility and consistent preset locations."],
["Stagecraft","Set safety","A stage platform wobbles under an actor. What should happen?","Stop using it until a competent person secures and checks the structure."],
["Stagecraft","Costume","A costume trails near a candle or hot stage lamp. What is the concern?","It creates a fire and trip hazard; change the costume or remove the hazard before the performance."],
["Film language","Shot size","A director wants viewers to notice a character's emotional reaction. Which shot is often useful?","A close-up that shows facial expression and detail."],
["Film language","Continuity","A character holds a cup in the right hand in one shot and the left in the next without action explaining the change. What is this?","A continuity error that can disrupt the viewer's sense of a continuous scene."],
["Film language","Camera movement","A camera pans quickly without a storytelling reason and makes viewers uncomfortable. What should guide camera movement?","Movement should be motivated by the story, subject or intended visual effect and controlled for clarity."],
["Film language","Editing","A scene feels confusing because the edit jumps between unrelated times without a clear cue. What can improve it?","Use a coherent shot order and appropriate transitions or visual and audio cues to signal time changes."],
["Film language","Sound design","A film scene feels flat because dialogue, ambience and effects are all at the same level. What should the editor do?","Mix dialogue clearly and balance ambience and effects to support the scene without masking speech."],
["Production planning","Storyboard","A student team starts filming without planning shots and repeatedly misses important actions. What would help?","Create a storyboard or shot list that maps key actions, angles and sequence before filming."],
["Production planning","Call sheet","Actors arrive at different locations and times because instructions were unclear. What document would prevent this?","A call sheet giving schedule, locations, contact details, scenes and required cast or crew."],
["Production planning","Risk assessment","A film scene requires running near moving traffic. What is the responsible approach?","Redesign or control the scene using a safe location, barriers and qualified supervision; never expose cast to uncontrolled traffic."],
["Production planning","Budget","A short film budget omits transport, storage and permissions. What should the producer do?","Prepare a full itemised budget and include essential permissions and contingency costs."],
["Media ethics","Consent","A documentary interviews a minor about a sensitive personal experience. What must the team consider?","Safeguarding, informed consent from the appropriate people, the learner's assent and the risk of harm or unwanted exposure."],
["Media ethics","Privacy","A film shows a house number and a private document in the background. What should the editor do?","Remove or obscure unnecessary identifying information before public release."],
["Media ethics","Representation","An actor is asked to imitate an ethnic accent for ridicule. What is the ethical concern?","The portrayal can reinforce prejudice; develop humour through character and situation without demeaning a group."],
["Media ethics","Copyright","A student uses a film clip and music in a public project without checking rights. What should be done?","Check permission and licensing, use authorised material and provide required attribution."],
["Performance","Rehearsal process","Actors know their lines but miss cues and block each other's movement. What rehearsal should be scheduled?","A blocking and cue-to-cue rehearsal followed by a full run-through."],
["Performance","Audience feedback","After a performance, a group receives criticism and immediately dismisses it. What response supports improvement?","Compare feedback with the performance goals, identify actionable points and plan revisions."],
["Performance","Teamwork","A director changes a scene without informing the sound and lighting crew. What process would help?","Communicate revisions through shared updated scripts, cue sheets and a production briefing."]
];
function makeBank(rows, subject, prefix, outcome) {
 return rows.map((r,i)=>{
   const answer=r[3], options=[answer];
   for(let step=1;step<rows.length && options.length<4;step++){
     const candidate=rows[(i+step)%rows.length][3];
     if(candidate!==answer && !options.includes(candidate)) options.push(candidate);
   }
   const shift=(i*3 + prefix.length)%4;
   const shuffled=options.map((_,j)=>options[(j-shift+4)%4]);
   return {id:prefix+"-"+String(i+1).padStart(2,"0"),grade:"Grade 10",subject,
     strand:r[0],substrand:r[1],learningOutcome:outcome,question:r[2],
     options:shuffled,correctIndex:shuffled.indexOf(answer),explanation:answer,published:true};
 });
}
module.exports = [
 ...makeBank(sportsRows,"Sports and Recreation","g10-sports-recreation","Apply fitness, movement, tactics, safety, officiating, leadership and recreation principles."),
 ...makeBank(musicRows,"Music and Dance","g10-music-dance","Apply musical elements, performance, composition, technology, dance and cultural appreciation."),
 ...makeBank(theatreRows,"Theatre and Film","g10-theatre-film","Apply dramatic storytelling, performance, stagecraft, film language, production planning and media ethics.")
];
