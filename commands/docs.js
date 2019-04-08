const open = require("open");
const supportedPlatforms = require("../supportedPlatforms");

module.exports = {
  name: "docs",
  run: async context => {
    // If the user passed in any options to $ amplify docs
    if (Object.keys(context.parameters.options).length) {
      // Object.entries returns an array of arrays, so I flatten it to get the key and value
      let [desiredPlatform, desiredSection] = Object.entries(
        context.parameters.options
      ).flat();

      if (supportedPlatforms.includes(desiredPlatform)) {
        //if a user inputs $ amplify docs --react, then the gluegun object would be {react: true}
        // https://infinitered.github.io/gluegun/#/toolbox-parameters?id=options
        // So doing type checking to make sure there was an actual value
        if (typeof desiredSection === "string") {
          if (desiredPlatform !== "android" || desiredPlatform !== "ios") {
            const endpoint = `https://aws-amplify.github.io/docs/js/${desiredSection}`;
            console.log(`Opening up the Amplify docs for...${endpoint}`);
            open(endpoint);
          } else {
            const endpoint = `https://aws-amplify.github.io/docs/${desiredPlatform}/${desiredSection}`;
            console.log(`Opening up the Amplify docs for...${endpoint}`);
            open(endpoint);
          }
          // if the flag from the CLI isn't "android" or "ios" and has no options, then give the proper endpoint
        } else {
          if (desiredPlatform !== "android" && desiredPlatform !== "ios") {
            const endpoint = `https://aws-amplify.github.io/docs/js/start?platform=${desiredPlatform}`;
            console.log(`Opening up the Amplify docs for...${endpoint}`);
            open(endpoint);

            //otherwise direct to either the android or ios docs
          } else {
            const endpoint = `https://aws-amplify.github.io/docs/${desiredPlatform}/start?`;
            console.log(`Opening up the Amplify docs for...${endpoint}`);
            open(endpoint);
          }
        }
      }

      // If the user didn't pass in options to $ amplify docs, then take to home page
    } else {
      open("https://aws-amplify.github.io/docs/");
    }
  }
};
