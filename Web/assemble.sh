# Copy related content
mkdir ./assets/poll
mkdir ./assets/poll/images
mkdir ./assets/poll/fonts
cp ../Poll/iot/bundle.js ./assets/js/iot.js
cp -r ../Poll/javascripts/assets/* ./assets/poll/images
cp -r ../Poll/javascripts/fonts/* ./assets/poll/fonts
cp ../VotingApplication/data/categories.js ./assets/data/categories.js
cp ../VotingApplication/data/confirmationSynonyms.js ./assets/data/confirmationSynonyms.js
cp ../VotingApplication/secrets.js ./assets/data/secrets.js
cp ../VotingApplication/vote.css ./assets/css/vote.css