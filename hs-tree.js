
// ===== HORNBOSTEL-SACHS TREE =====
// Each category is [code, "name", [children...]].
// An instrument sits in the deepest category its HS code starts with.
//
// Note: Playing-method suffixes such as -4, -5, -6 and -71
// are not separate structural branches in this tree.

const hsTree = [
 ["1","Idiophones (the instrument itself vibrates)",[
  ["11","Struck idiophones",[
   ["111","Directly struck idiophones",[
    ["111.1","Concussion idiophones",[]],
    ["111.2","Percussion idiophones",[]]
   ]],
   ["112","Indirectly struck idiophones",[
    ["112.1","Shaken idiophones",[]],
    ["112.2","Scraped idiophones",[]],
    ["112.3","Split idiophones",[]],
    ["112.4","Scraped vessels",[]]
   ]]
  ]],
  ["12","Plucked idiophones",[]],
  ["13","Friction idiophones",[]],
  ["14","Blown idiophones",[]]
 ]],

 ["2","Membranophones (a stretched membrane vibrates)",[
  ["21","Struck membranophones",[
   ["211","Directly struck membranophones",[]],
   ["212","Indirectly struck membranophones",[]]
  ]],
  ["22","Plucked membranophones",[]],
  ["23","Friction membranophones",[]],
  ["24","Singing membranes",[]]
 ]],

 ["3","Chordophones (strings vibrate)",[
  ["31","Simple chordophones (zithers)",[
   ["311","Bar zithers",[
    ["311.1","Musical bows",[]],
    ["311.2","True stick zithers",[
     ["311.21","Musical bows with rigid string carrier",[]],
     ["311.22","True stick zithers",[]]
    ]]
   ]],
   ["312","Tube zithers",[
    ["312.1","Whole tube zithers",[
     ["312.11","Idiochord whole tube zithers",[]],
     ["312.12","Heterochord whole tube zithers",[
      ["312.121","Without extra resonator",[]],
      ["312.122","With extra resonator",[]]
     ]]
    ]],
    ["312.2","Half-tube zithers",[
     ["312.21","Idiochord half-tube zithers",[]],
     ["312.22","Heterochord half-tube zithers",[]]
    ]]
   ]],
   ["313","Raft zithers",[
    ["313.1","Idiochord raft zithers",[]],
    ["313.2","Heterochord raft zithers",[]]
   ]],
   ["314","Board zithers",[
    ["314.1","True board zithers",[
     ["314.11","Without resonator",[]],
     ["314.12","With resonator",[
      ["314.121","With resonator bowl",[]],
      ["314.122","With resonator box",[]]
     ]]
    ]],
    ["314.2","Board zither variations",[
     ["314.21","Ground zithers",[]],
     ["314.22","Harp zithers",[]]
    ]]
   ]],
   ["315","Trough zithers",[
    ["315.1","Without resonator",[]],
    ["315.2","With resonator",[]]
   ]],
   ["316","Frame zithers",[
    ["316.1","Without resonator",[]],
    ["316.2","With resonator",[]]
   ]]
  ]],

  ["32","Composite chordophones",[
   ["321","Lutes",[
    ["321.1","Bow lutes (pluriarcs)",[]],
    ["321.2","Yoke lutes or lyres",[
     ["321.21","Bowl lyres",[]],
     ["321.22","Box lyres",[]]
    ]],
    ["321.3","Handle lutes",[
     ["321.31","Spike lutes",[
      ["321.311","Spike bowl lutes",[]],
      ["321.312","Spike box lutes",[]],
      ["321.313","Spike tube lutes",[]],
      ["321.314","Spike frame lutes",[]]
     ]],
     ["321.32","Necked lutes",[
      ["321.321","Necked bowl lutes",[]],
      ["321.322","Necked box lutes or necked guitars",[]]
     ]],
     ["321.33","Half-spike lutes or tanged lutes",[
      ["321.331","Tanged bowl lutes",[]],
      ["321.332","Tanged box lutes",[]]
     ]]
    ]]
   ]],
   ["322","Harps",[
    ["322.1","Open harps",[
     ["322.11","Arched harps",[]],
     ["322.12","Angular harps",[]]
    ]],
    ["322.2","Frame harps",[]]
   ]],
   ["323","Spike harps with tall stringholders",[
    ["323.1","Open spike harps",[]],
    ["323.2","Frame spike harps",[]]
   ]],
   ["324","Tanged harps with tall stringholders",[]]
  ]],

  ["33","Variable-tension chordophones",[
   ["331","Bowed variable-tension chordophones",[]],
   ["332","Plucked variable-tension chordophones",[]]
  ]]
 ]],

 ["4","Aerophones (air vibrates)",[
  ["41","Free aerophones",[
   ["411","Displacement free aerophones",[]],
   ["412","Interruptive free aerophones",[
    ["412.1","Idiophonic interruptive aerophones (free reeds)",[]],
    ["412.2","Non-idiophonic interruptive aerophones",[]]
   ]],
   ["413","Plosive aerophones",[]]
  ]],
  ["42","Non-free aerophones (wind instruments proper)",[
   ["420","Edge-tone instruments that are not flutes",[]],
   ["421","Edge instruments or flutes",[
    ["421.1","Flutes without ducts",[]],
    ["421.2","Flutes with ducts",[]]
   ]],
   ["422","Reedpipes",[
    ["422.1","Double-reed instruments",[]],
    ["422.2","Single-reed instruments",[]],
    ["422.3","Free-reed pipes",[]]
   ]],
   ["423","Lip-vibrated instruments (trumpets)",[
    ["423.1","Natural trumpets",[]],
    ["423.2","Chromatic trumpets",[]]
   ]],
   ["424","Membranopipes",[]]
  ]]
 ]],

 ["5","Electrophones (electricity involved in sound production)",[
  ["51","Electromechanical instruments",[]],
  ["52","Electronic instruments",[]]
 ]]
];

