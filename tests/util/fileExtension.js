var vscodeUri = require('vscode-uri').default
var path = require('path')
var cwd = process.cwd();
var fs = require('fs');

function getUri(filePath){
    return vscodeUri.file(filePath).toString().replace('%25','%')
}

function getFullPath(relativePath, file){
    if(file)
        return vscodeUri.file(path.join(cwd, relativePath,file)).fsPath;
    return vscodeUri.file(path.join(cwd, relativePath)).fsPath;        
}

function getPath(path1, file){
    if(file)
        return vscodeUri.file(path.join(path1,file)).path;
    return vscodeUri.file(path1).path;
}

function parseContent(file) {
    return fs.readFileSync(file, "utf-8");
}

function copyFile(from, to){
    fs.createReadStream(from).pipe(fs.createWriteStream(to));
}

module.exports={
    getUri:getUri,
    getFullPath:getFullPath,
getPath:getPath,
parseContent:parseContent,
copyFile:copyFile}