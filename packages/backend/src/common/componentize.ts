const getNodeData = (line: string): string[] => {
  if(!line.split(' data-nodeIds="')[1]) return ["","",""];
  let [ parentId, childId ] = line.split(' data-nodeIds="')[1].split('"')[0].split(';');
  let nodeType = line.split(' data-nodeType="')[1].split('"')[0];
  return [ parentId, childId, nodeType ];
}


export const componentize = (code: string) => {
  const lines = code.split('\n');
  const components: string[] = [];
  let componentCount = 0;
  let openTag = 0;
  let currentComponentId = "";
  const open = lines.shift();
  const close = lines.pop();


  lines.forEach((line: string, index) => {
    const nodeData = getNodeData(line);
    const [ parentId, _childId, _nodeType ] = nodeData;
    if(!openTag && (parentId !== currentComponentId)) {
      currentComponentId = parentId;
      componentCount++;
    }
    openTag += (line.match(/<div/g) || []).length;
    openTag += (line.match(/<img/g) || []).length;
    openTag -= (line.match(/<\/div/g) || []).length;
    openTag -= (line.match(/\/>/g) || []).length;
    if(!components[componentCount]) components[componentCount] = "";
    components[componentCount] += `${line}\n`;
  })




  //   const open = lines.shift();
//   const close = lines.pop();
//   const components: string[] = [];
//   let componentCount = 0;
//   let componentLine = 0;
//   let openTag = 0;
//   lines.forEach((line: string) => {
//     componentLine++;
//     if(!components[componentCount]) components[componentCount] = "";
//     openTag += (line.match(/<div/g) || []).length;
//     openTag -= (line.match(/<\/div/g) || []).length;
//     openTag -= (line.match(/\/>/g) || []).length;
//     components[componentCount] += `${line}\n`;
//     if(!openTag && componentLine > 3) {
//       componentLine = 0;
//       componentCount++;
//     }
//   })

//   const duplicateCheck: string[] = [];

//   components.forEach((component: string) => {
//     if(!duplicateCheck.includes(component)) duplicateCheck.push(component);
//   })

//   let componentMessage = "";

//   if(duplicateCheck.length !== components.length) componentMessage = `INCLUDES ${components.length - duplicateCheck.length} DUPLICATE COMPONENTS`;
  

  return `
${code}\n\n\n****Component Count: ${components.length}*****\n\n\n
${open}
${components.map((component: string, index) => `\n\n\nComponent ${index}\n\n${component}`).join('')}
${close}
    `;
}