/**
 * Translate the English UI text items to the user language  
 * 
 * @author Gerd Wagner
 * 
 * @param {string} txt  A UI text item to be translated.
 */
oa.trans = function( str) {
  var txtId="", txt="", c=0, transtext="", filteredText="", phrases=[];
  
  function translateWordByWord( t) {
    var words = t.split(" ");
    for (var i=0; i < words.length; i++) {
      words[i] = oa.trans.DE[words[i]] || words[i];
    }
    return words.join(" ");    
  }
  
  if (str.indexOf("#") === 0) {  // text phrase with ID
    c = str.indexOf(":");
    txtId = str.substring( 0, c); 
    txt = str.substring( c+1, str.length);
    txt = txt.trim( txt);
  } else {
    txt = str;
  }
  
  switch( oa.learner.language) {
  case "en": 
    return txt.replace(/\|/g, " ");  // replace "|" by " "
    break;
  case "de":
    if (txt.indexOf("|") > 0) {  // mark up of phrases
      filteredText = txt.replace(/\|/g, " ");  // replace "|" by " "
      if (!oa.trans.DE[ filteredText]) {  // no translation of the full text available
        phrases = txt.split("|");
        for (var i=0; i < phrases.length; i++) {
          if (!oa.trans.DE[phrases[i]]) {  // no translation of the phrase
            phrases[i] = translateWordByWord( phrases[i]);
          } else {
            phrases[i] = oa.trans.DE[ phrases[i]];
          }
        }
        transtext = phrases.join(" ");
      } else {
        transtext = oa.trans.DE[ filteredText];
      }
    } else {  // no mark up of phrases
      if (txtId) {  // long text phrase with text ID
        if (!oa.trans.DE[ txtId]) {  // no translation for text ID available
          transtext = translateWordByWord( txt);
        } else {
          transtext = oa.trans.DE[ txtId];
        }        
      } else {
        if (!oa.trans.DE[txt]) {  // no translation of the full text available
          transtext = translateWordByWord( txt);
        } else {
          transtext = oa.trans.DE[txt];
        }
      }      
    }
    return transtext;
    break;        
  default: 
    return str.replace(/\|/g, " ");  // replace "|" by " "
    break;
  };
};