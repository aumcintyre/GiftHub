const db = require('../config/connection');
const { User, Exchange } = require('../models');
const userSeeds = require('./userSeeds.json');
const exchangeSeeds = require('./exchangeSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Exchange.deleteMany({});

    await User.create(userSeeds);
    await Exchange.create(exchangeSeeds);

    // for (let i = 0; i < exchangeSeeds.length; i++) {
    //   const { _id, users } = await Exchange.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
