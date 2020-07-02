const latestTag = child.execSync('git describe --long').toString('utf-8').split('-')[0];
const output = child
  .execSync(`git log ${latestTag}..HEAD --format=%B%H----DELIMITER----`)
  .toString("utf-8");