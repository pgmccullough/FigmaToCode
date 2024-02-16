export const componentize = (code: string) => {
  const lines = code.split('\n');
  const open = lines.shift();
  const close = lines.pop();
  const components: string[] = [];
  let componentCount = 0;
  let componentLine = 0;
  let openTag = 0;
  lines.forEach((line: string) => {
    componentLine++;
    if(!components[componentCount]) components[componentCount] = "";
    openTag += (line.match(/<div/g) || []).length;
    openTag -= (line.match(/<\/div/g) || []).length;
    openTag -= (line.match(/\/>/g) || []).length;
    components[componentCount] += `${line}\n`;
    if(!openTag && componentLine > 3) {
      componentLine = 0;
      componentCount++;
    }
  })

  const duplicateCheck: string[] = [];

  components.forEach((component: string) => {
    if(!duplicateCheck.includes(component)) duplicateCheck.push(component);
  })

  let componentMessage = "";

  if(duplicateCheck.length !== components.length) componentMessage = `INCLUDES ${components.length - duplicateCheck.length} DUPLICATE COMPONENTS`;
  

  return `
${code}\n\n\n****Component Count: ${components.length}${componentMessage}*****\n\n\n
${open}
${components.map((component: string, index) => `\n\n\nComponent ${index}\n\n${component}`).join('')}
${close}
    `.replace(/-/g, ' ');
}