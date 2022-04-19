import React,{useState} from 'react';

export default function TextForm() {
    //let wordList=["fitted","flamingoes","flannel","foreign","fortunate","foundation","frequent","friar","fuel","funnel","further","gallery","gentlemen","ginger","glimpse","gospel","government","grammar","graze","grievance","grocer","groceries","growth","guard","guess","guinea","guitars","gulf","gurgle","habit","happiness","harbour","headache","heathen","height","helicopter","hexagon","hideout","hinge","hockey","hoist","honour","hurried","hypnotise","idea","impertinent","include","ingredients","inpatient","insane","inspire","introduce","introvert","invade","invitation","Italy","itemise","jewel","journal","junior","justice","kilogram","language","latitude","laundrette","lightning","litter","loan","longbow","lorgnette","lyric","mackerel","madam","magic","magistrate","manageress","marries","meanness","mechanic","memorandum","mention","mercy","minister","miser","misery","moderate","monument","motoring","motorist","mountainous","multiply","multiplying","nectar","neglect","neighbour","neighbours","neither","ninth","nought","nudge","oath","objector","oblige","observation","observe","obviously","onion","orator","outdoors","outrageous","overalls","pane","parallelogram","parcel","passage","pavement","payment","peacefully","percolator","performance","perspire","persuasion","pigeon","pillar","pledge","plunge","policewomen","population","pore","possess","practice","prance","precise","precision","pregnant","prepare","preserve","previously","problem","produce","progress","promise","promote","prompt","punctually","purchase","purpose","quickstep","rabies","racial","radius","rapid","ruction","reader","receive","receiving","recipe","recite","reduce","redundant","refuge","refused","refuses","reign","relief","reluctant","represent","reilsieve","revise","rogue","abbey","absence","accentuate","access","accommodation","acquaint","acquaintance","acquainted","acquire","advertise","advertisement","albatross","ambition","ambitious","angle","angling","anniversary","annoy","annoyed","antiseptic","apparent","application","approve","aqualung","architect","arguable","arrival","assassinate","assistance","athletic","authoress","bachelor","badminton","bankrupt","barricade","bassoon","beverages","boycott","bulbous","burden","capable","capillary","carnivorous","cartridge","cathedral","cenotaph","challenge","chaotic","character","chess","Chinese","chisel","choir","circumstance","circus","civil","civilised","cleanliness","coconut","college","collie","combination","commence","commit","complaint","compliment","composer","comprehension","computer","comrade","✓","concern","conclusion","confetti","conflict","conform","coniferous","cowardly","create","creation","creditable","crime","croutons","crystal","cuckoo","cutlery","cyclic","dainty","decision","defect","definite","denim","deposit","description","design","despair","despise","destination","destitute/","destruction","detail","develop","devious","difference","digest","digestion","disappoint","dissolve","distribute","divan","division","domestic","dubious","elegant","ellipse","emergency","emigrant","energy","enormous","essay","estuary","evaporate","evidence","exceeding","excitement","exclusion","excommunicate","execute","exhausted","exhilarate","explosion","extravagance","extravagant","extreme","extremely","exuberance","fabulous","faithful","famine","fanatical","fatal","feat","filleting","firework","flavour","flaw","formulae","formulate","fossil","fragrant","freight","friendly","frigid","fungus","gateau","generous","genuine","conker","consideration","contagious","contest","continually"];
    let wordList=["Ambling", "Accusatory", "Allusion", "Adjourn", "Apathetic", "Apprise", "Affliction", "Anguish", "Amply", "Abate", "Abrasive", "Assented", "Apathetic", "Absolution", "Amateur", "Amphibian", "Ally", "Authentic", "Alleviate", "Aide", "Aped", "Ablest", "Axiom", "Allay", "Affluent", "Ambles", "Amiable", "Askance", "Adherent", "Augmenting", "Alleviate", "Ascent", "Aberration", "Altercation", "Arduous", "Apprehensive", "Annihilated", "Agnostic", "Abundance", "Abode", "Acquainted", "Affable", "Antiquity", "Asunder", "Arduous", "Adversary", "Aghast", "Altruistic", "Balk", "Baleful", "Burgeon", "Breadth", "Bray", "Beam", "Bleak", "Bleats", "Barbarian", "Breach", "Boastful", "Busk", "Benign", "Boisterous", "Brazen", "Bellicose", "Bickering", "Bereft", "Braggart", "Brevity", "Benevolent", "Belligerent", "Besieged", "Bewildered", "Confiscate", "Crucial", "Corroborate", "Convoluted", "Confiscated", "Curtail", "Chastised", "Cursory", "Corrosive", "Complicity", "Contemplate", "Conceivable", "Culpable", "Coercion", "Concerted", "Cherished", "Callow", "Conspicuous", "Croak", "Confine", "Chaos", "Confiscate", "Clement", "Curate", "Combat", "Complacent", "Credibility", "Chicanery", "Cacophony", "Convoluted", "Chauvinist", "Convoluted", "Colloquial", "Candid", "Customary", "Customary", "Compelling", "Chicanery", "Commotion", "Conceited", "Conducive", "Contented", "Coarse", "Calamity", "Deploy", "Dismay", "Discretionary", "Diffident", "Diction", "Deride", "Droll", "Diligent", "Dour", "Deluge", "Delude", "Derail", "Delude", "Duress", "Destitute", "Derivative", "Deranged", "Dale", "Drone", "Deject", "Dismal", "Diligence", "Defy", "Darn", "Discerning", "Demotion", "Demure", "Delectable", "Discerning", "Diligent", "Disparate", "Diffident", "Detractors", "Derisive", "Derision", "Disparaging", "Despised", "Demote", "Decree", "Detain", "Destitute", "Despondent", "Devour", "Disintegrate", "Doubtful", "Destitute", "Dilapidated", "Disarray", "Dismal", "Dishevelled", "Exonerate", "Elated", "Enchant", "Erasable", "Edible", "Effusion", "Effigy", "Enrage", "Erroneous", "Engrossed", "Emanate", "Epoch", "Expel", "Era", "Enmity", "Extrovert", "Elude", "Elect", "Endeavour", "Exhort", "Eminent", "Frugal", "Feasible", "Furtive", "Feral", "Formidable", "Feign", "Flatulence", "Frantic", "Flimsy", "Finesse", "Ferocity", "Foe", "Filly", "Foal", "Forge", "Futile", "Fastidious", "Frivolous", "Flamboyant", "Flourish", "Fiasco", "Futile", "Furtively", "Forsake", "Forsake", "Fortuitous", "Fraudulent", "Grandeur", "Gallant", "Goaded", "Gentility", "Granular", "Gallant", "Gasket", "Grandiose", "Gregarious", "Genealogy", "Gratuitous", "Gauge", "Guttural", "Hoes", "Heeding", "Hinder", "Hinge", "Harmonious", "Hierarchical", "Hoof", "Hearth", "Hubris", "Helix", "Hoax", "Heedless", "Inference", "Infernal", "Infamy", "Impose", "Impoverished", "Inexplicable", "Ineptitude", "Instructive", "Inedible", "Injustice", "Introvert", "Infatuate", "Intact", "Idyllic", "Insistent", "Idol", "Inhale", "Industrious", "Indolent", "Insipid", "Idiom", "Impartial", "Inattentive", "Imminent", "Idyllic", "Indolent", "Impoverished", "Integral", "Implicate", "Irreverent", "Imprudent", "Inferior", "Inconspicuous", "Instigate", "Incessant", "Intuitive", "Idiosyncrasy", "Impudent", "Inaudible", "Inaugural", "Impermeable", "Inaugurate", "Inedible", "Inconspicuous", "Innocuous", "Insolent", "Introvert", "Implicate", "Intercede", "Impecunious", "Jovial", "Keel", "Lair", "Lofty", "Luminous", "Liberal", "Lucrative", "Luminous", "Lustrous", "Lunar", "Lame", "Litigation", "Luminary", "Languish", "Lament", "Lavish", "Lenient", "Liable", "Lure", "Lethargic", "Malleable", "Mare", "Mere", "Mute", "Malice", "Meddle", "Mare", "Muted", "Mace", "Munificence", "Mediocre", "Monochrome", "Mitigating", "Monotonous", "Meanders", "Melancholic", "Meticulous", "Mediocre", "Malignant", "Melodious", "Meticulous", "Meticulous", "Nominal", "Nuance", "Novice", "Nobility", "Nuisance", "Nauseous", "Nuisance", "Obligatory", "Onerous", "Ordained", "Ordeal", "Oblong", "Oblige", "Omnivore", "Omit", "Orator", "Oscillate", "Ostentatious", "Obfuscate", "Obscure", "Obstinate", "Ostentatious", "Pivotal", "Placate", "Profess", "Prudent", "Plenary", "Prohibit", "Plethora", "Ponder", "Prudence", "Predominantly", "Predilection", "Plethora", "Peril", "Prelude", "Perchance", "Porous", "Peripheral", "Plummet", "Plaintiff", "Palpable", "Plethora", "Pact", "Pillage", "Pew", "Pacifist", "Prejudiced", "Pungent", "Pragmatic", "Precocious", "Ponderous", "Prominent", "Pious", "Perpetuate", "Precedent", "Passive", "Plausible", "Precocious", "Protract", "Prominence", "Pungent", "Prosper", "Perilous", "Perplexed", "Prominent", "Precarious", "Prejudice", "Prosperous", "Quarry", "Quarantine", "Quandary", "Quondary", "Quaint", "Remnant", "Rarity", "Relegate", "Retrieve", "Remnants", "Resonant", "Ramification", "Revile", "Receptacle", "Ransack", "Recede", "Reel", "Reverence", "Repelled", "Residue", "Reluctant", "Receptacle", "Repercussions", "Ravenous", "Rogue", "Reprimand", "Recite", "Reap", "Ruffian", "Respite", "Retort", "Resilience", "Reprieve", "Rhapsody", "Reprieve", "Severe", "Strenuous", "Stipulatory", "Scarcity", "Sanctity", "Stolid", "Subtlety", "Stout", "Sage", "Sanction", "Sups", "Spic", "Squeak", "Sphere", "Stout", "Stance", "Sonnet", "Swallow", "Supplicate", "Sundry", "Suggestible", "Subservient", "Sycophancy", "Significant", "Scowl", "Superiority", "Scholastic", "Sacrifice", "Squabble", "Succinct", "Sceptical", "Squabble", "Superfluous", "Tranquility", "Tardy", "Terminate", "Trivial", "Trepidation", "Taut", "Tweak", "Transient", "Tapestry", "Turbulent", "Traitor", "Tempestuous", "Unwitting", "Ultimatum", "Unscrupulous", "Unanimous", "Unsurpassed", "Unorthodox", "Unfathomable", "Virtuous", "Voracious", "Ventriloquist", "Vanguard", "Vanadium", "Vilify", "Veil", "Vague", "Vice", "Virtue", "Viable", "Vivid", "Vixen", "Vapid", "Vigilant", "Vain", "Vicarious", "Venerable", "Verge", "Voracious", "Wretch", "Wither", "Wary", "Whimsical", "Yearn", "Yearned"]
    const random = Math.floor(Math.random() * wordList.length);
    let wordToList=wordList[random];
    const [count,setCount]=useState(0);
    const [word,setWord]=useState(wordToList);
    const [meaning,setMeaning]=useState('Meaning...');
    const [opposite,setOppositeMeaning]=useState('Opposite...');
    const [example,setExample]=useState('Example in sentence...');
    const [typeWord,setTypeWord]=useState("");
    
    

    function newWord(){
      wordToList=wordList[random];
      setWord(wordToList)
      setMeaning('Meaning...');
      setOppositeMeaning('Opposite...');
      setExample('Example in sentence...');
      setTypeWord("");
      
    }

    function incrementCount(){
      setCount(count+1);
    }

    function findMeaning(w){
       fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+w)
        .then(response => response.json())
        .then(json => {  
      
         setMeaning( (json[0].meanings[0].definitions).map((x,i)=>{
            return (" Meaning "+(i+1)+":  "+x.definition);
          }))
         setOppositeMeaning( (json[0].meanings[0].definitions).map((y,i)=>{
            return (" Opposite Meaning "+(i+1)+":  "+y.antonyms);
          }))
        setExample( (json[0].meanings[0].definitions).map((z,i)=>{
            return " Example with Sentence "+(i+1)+":  "+(z.example);
          }))
        }).catch(function(error) {
          console.log(error);
          alert("Sorry, we do not have a meaning for this word");

      });
      
    }

  return (
   <>
    <div className="container-fluid">
    <div className="container">
    <div className="row">
    <div className="jumbotron jumbotron-fluid">
      <h1>Find a meaning for below word...</h1>
      <hr></hr>
    <div >
      <h2>{word}</h2>
       <span className="form-control w-100 mb-2" id="myBoxRead" >{meaning}</span>
       <span className="form-control w-100 mb-2" id="myBoxReadOpposite" >{opposite}</span>
       <span className="form-control w-100 mb-2" id="myBoxReadExample">{example}</span>
    </div>
    <button className="btn btn-primary p-2 m-2" onClick={()=>{if(meaning==="Meaning..."){incrementCount();findMeaning(word)}}}>Find Meaning </button>
    <button className="btn btn-danger  p-2 m-2" onClick={()=>{newWord() }}>New Word</button>
    </div>
    </div >
    <div className="row">
    <div className="jumbotron jumbotron-fluid">
    <h2>Enter a word to find meaning...</h2>
  
    <div className="mb-2">
       <textarea className="form-control w-50" id="myBoxWrite" rows="1" value={typeWord}  onChange={(e) => {document.getElementById("btn2").disabled=false; setTypeWord(e.target.value)}}></textarea>
    </div>
   
    <button id="btn2" className="btn btn-primary mb-2" onClick={(e)=>{if(typeWord!==""){e.target.disabled=true ;incrementCount();findMeaning(typeWord);setWord('Meaning for your search....') }}}>Find Meaning </button>
    <div>
    <h5 >You have so far learned {count} words.</h5>
    </div>
    </div>
    </div>
    
  </div>
</div>

     
   
</>
  )
}
