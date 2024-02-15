const maxDash = (str) => {
  const lines = str.split('\n');
  let maxDashes = 0;
  lines.forEach(line => {
    const dashesCount = (line.match(/-/g) || []).length;
      if (dashesCount > maxDashes) {
        maxDashes = dashesCount;
    }
  })
  return maxDashes;
};

const descendantCount = (str) => {
  const lines = str.split('\n');
  const hashMap = {};
  lines.forEach(line => {
    const key = line.match(/-/g)?.join("");
    if(!hashMap[key] && hashMap[key] !== 0) {
      return hashMap[key] = 1
    }
    hashMap[key]++;
  })
  delete hashMap.undefined;
  return hashMap;
}

const test1 = `
<div style={{width: 564, height: 1012, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
--<div style={{alignSelf: 'stretch', height: 82, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
----<div style={{alignSelf: 'stretch', color: '#666666', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word'}}>Username</div>
----<div style={{alignSelf: 'stretch', height: 56, padding: 16, background: 'white', borderRadius: 8, border: '1px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
------<div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
--------<div style={{width: 304, color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Enter username</div>
--------<div style={{width: 24, height: 24, position: 'relative', opacity: 0}}>
----------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
----------<div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: 'black'}}></div>
--------</div>
------</div>
----</div>
--</div>
--<div style={{alignSelf: 'stretch', height: 108, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
----<div style={{alignSelf: 'stretch', color: '#666666', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word'}}>Password</div>
----<div style={{alignSelf: 'stretch', height: 56, padding: 16, background: 'white', borderRadius: 8, border: '1px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
------<div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
--------<div style={{width: 304, color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Enter password</div>
--------<div style={{width: 24, height: 24, position: 'relative', opacity: 0}}>
----------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
----------<div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: 'black'}}></div>
--------</div>
------</div>
----</div>
----<div style={{alignSelf: 'stretch', color: '#666666', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}>Your password is between 4 and 12 characters</div>
--</div>
--<div style={{alignSelf: 'stretch', height: 108, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
----<div style={{alignSelf: 'stretch', color: '#666666', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word'}}>Input Text Label</div>
----<div style={{alignSelf: 'stretch', height: 56, padding: 16, background: 'white', borderRadius: 8, border: '2px #EB5757 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
------<div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
--------<div style={{width: 304, color: '#333333', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Typing |</div>
--------<div style={{width: 24, height: 24, position: 'relative'}}>
----------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
----------<div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#EB5757'}}></div>
--------</div>
------</div>
----</div>
----<div style={{alignSelf: 'stretch', color: '#EB5757', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}>Error message informing me of a problem</div>
--</div>
--<div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
----<div style={{width: 24, height: 24, position: 'relative'}}>
------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 8, border: '1px #CCCCCC solid'}} />
----</div>
----<div style={{flex: '1 1 0', color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Remember me</div>
--</div>
--<div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
----<div style={{width: 49, height: 24, position: 'relative'}}>
------<div style={{width: 49, height: 24, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 32, border: '1px #CCCCCC solid'}} />
------<div style={{width: 18, height: 18, left: 28, top: 3, position: 'absolute', background: '#F4F4F4', borderRadius: 32, border: '1px #CCCCCC solid'}} />
----</div>
----<div style={{width: 303, color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Off</div>
--</div>
--<div style={{width: 564, height: 136, position: 'relative'}}>
----<div style={{width: 564, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
------<div style={{width: 24, height: 24, position: 'relative'}}>
--------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 32, border: '1px #CCCCCC solid'}} />
------</div>
------<div style={{flex: '1 1 0', color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Radio selection 1</div>
----</div>
----<div style={{width: 564, left: 0, top: 56, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
------<div style={{width: 24, height: 24, position: 'relative'}}>
--------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 32, border: '1px #CCCCCC solid'}} />
--------<div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: '#7A5CFA', borderRadius: 32}} />
------</div>
------<div style={{flex: '1 1 0', color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Radio selection 2</div>
----</div>
----<div style={{width: 564, left: 0, top: 112, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
------<div style={{width: 24, height: 24, position: 'relative'}}>
--------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 32, border: '1px #CCCCCC solid'}} />
------</div>
------<div style={{flex: '1 1 0', color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Radio selection 3</div>
----</div>
--</div>
--<div style={{alignSelf: 'stretch', height: 250, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
----<div style={{alignSelf: 'stretch', color: '#666666', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word'}}>Dropdown Title</div>
----<div style={{alignSelf: 'stretch', height: 224, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
------<div style={{alignSelf: 'stretch', height: 56, padding: 16, background: 'white', borderTopLeftRadius: 8, borderTopRightRadius: 8, border: '2px #7A5CFA solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
--------<div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
----------<div style={{flex: '1 1 0', color: '#333333', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Dropdown option</div>
----------<div style={{width: 24, height: 24, position: 'relative'}}>
------------<div style={{width: 12, height: 7.41, left: 6, top: 8, position: 'absolute', background: '#7A5CFA'}}></div>
------------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
----------</div>
--------</div>
------</div>
------<div style={{alignSelf: 'stretch', height: 56, padding: 16, background: '#7A5CFA', border: '1px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
--------<div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
----------<div style={{flex: '1 1 0', color: 'white', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Dropdown option</div>
----------<div style={{width: 24, height: 24, position: 'relative', opacity: 0}}>
------------<div style={{width: 12, height: 7.41, left: 6, top: 8, position: 'absolute', background: '#7A5CFA'}}></div>
------------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
----------</div>
--------</div>
------</div>
------<div style={{alignSelf: 'stretch', height: 56, padding: 16, background: 'white', border: '1px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
--------<div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
----------<div style={{flex: '1 1 0', color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Dropdown option 1</div>
----------<div style={{width: 24, height: 24, position: 'relative', opacity: 0}}>
------------<div style={{width: 12, height: 7.41, left: 6, top: 8, position: 'absolute', background: '#7A5CFA'}}></div>
------------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
----------</div>
--------</div>
------</div>
------<div style={{alignSelf: 'stretch', height: 56, padding: 16, background: 'white', borderTopLeftRadius: 8, borderTopRightRadius: 8, border: '1px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
--------<div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
----------<div style={{flex: '1 1 0', color: '#666666', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Dropdown option 2</div>
----------<div style={{width: 24, height: 24, position: 'relative', opacity: 0}}>
------------<div style={{width: 12, height: 7.41, left: 6, top: 8, position: 'absolute', background: '#7A5CFA'}}></div>
------------<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
----------</div>
--------</div>
------</div>
----</div>
--</div>
--<div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
----<div style={{padding: 16, background: 'white', borderRadius: 8, border: '1px #7A5CFA solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
------<div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
--------<div style={{width: 140, textAlign: 'center', color: '#7A5CFA', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Cancel</div>
------</div>
----</div>
----<div style={{padding: 16, background: '#7A5CFA', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
------<div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
--------<div style={{width: 140, textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Next</div>
------</div>
----</div>
--</div>
</div>
`

const test2 = `
<div style={{width: 238, height: 261, position: 'relative', borderRadius: 5, overflow: 'hidden', border: '1px #9747FF dotted'}}>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 20, top: 20, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: 'white', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.17) inset', borderRadius: 9999, border: '1px #B6B6B6 solid'}} />
----<div style={{color: '#231F20', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 119, top: 20, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: 'white', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.17) inset', borderRadius: 9999, border: '6px #00A1F4 solid'}} />
----<div style={{color: '#231F20', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 20, top: 80, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: 'white', borderRadius: 9999, border: '1px #857F87 solid'}} />
----<div style={{color: '#231F20', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 119, top: 80, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: 'white', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.17) inset', borderRadius: 9999, border: '6px #0087CE solid'}} />
----<div style={{color: '#231F20', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 20, top: 140, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: 'white', boxShadow: '0px 0px 0px 3px rgba(0, 167.53, 255, 0.30)', borderRadius: 9999, border: '1px #E6E6E6 solid'}} />
----<div style={{color: '#231F20', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 119, top: 140, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: 'white', boxShadow: '0px 0px 0px 3px rgba(0, 167.53, 255, 0.30)', borderRadius: 9999, border: '6px #0087CE solid'}} />
----<div style={{color: '#231F20', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 20, top: 200, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: '#F9F9F9', borderRadius: 9999, border: '1px #E6E6E6 solid'}} />
----<div style={{color: '#857F87', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
--<div style={{paddingTop: 8, paddingBottom: 8, left: 119, top: 200, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
----<div style={{width: 20, height: 20, background: '#F9F9F9', borderRadius: 9999, border: '6px #E6E6E6 solid'}} />
----<div style={{color: '#857F87', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Label</div>
--</div>
</div>
`

console.group("Test 1: Complex");
console.log(`Lines: ${test1.split("-<").length}`);
console.log(`Max Depth: ${maxDash(test1)}`);
console.log(`Shape: ${JSON.stringify(descendantCount(test1))}`);
console.groupEnd();

console.group("Test 2: Simple");
console.log(`Lines: ${test2.split("-<").length}`);
console.log(`Max Depth: ${maxDash(test2)}`);
console.log(`Shape: ${JSON.stringify(descendantCount(test2))}`);
console.groupEnd();