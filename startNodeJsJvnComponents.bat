echo off
cls
set command=json-server --watch dbJvnComponents.json
echo "Iniciando Node.js ..."
cd "../_nodeJS/"
%command%