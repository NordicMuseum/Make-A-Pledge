rm publish.zip

zip publish.zip index.js package.json package-lock.json -r assets pages --exclude '**/.git*'

echo "\n\n\t\033[30;42m  Done  \033[0m"
echo "\n\n\tYour publishable zip-file is ready! Unpack the created zip on your server."
echo "\tRemember; install dependencies using the following command:"
echo "\t\033[30;47m  npm install --production  \033[0m\n\n"