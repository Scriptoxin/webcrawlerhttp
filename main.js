const { crawlPage } = require('./crawl.js');
const { printReport } = require('./report');

const main = async () => {
    if (process.argv.length < 3) {
        console.log("no website provided");
        process.exit(1);
    } else if (process.argv.length > 3) {
        console.log("too many command line args");
        process.exit(1);
    }
    const baseURL = process.argv[2];
    
    console.log(`starting crawl of ${baseURL}`);
    const pages = await crawlPage(baseURL, baseURL, {});
    printReport(pages);
}

main();