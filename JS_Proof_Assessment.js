/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, fav_fruit, Birth_Place, Eye_Color) {
    // Ensure all parameters are provided
    if (!name || !fav_fruit || !Birth_Place || !Eye_Color) {
        console.error("Error: All parameters are required to mint an NFT.");
        return;
    }
    let nft = {
        name: name,
        fav_fruit: fav_fruit,
        Birth_Place: Birth_Place,
        Eye_Color: Eye_Color
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    if (nfts.length == 0) {
        console.log("No NFTs minted yet.");
        return;
    }
    console.log("List of minted NFTs:\n");
    let index = 1;
    for (const nft of nfts) {
        console.log("NFT: "+ index);
        console.log("Name: " + nft.name);
        console.log("Favorite Fruit: " + nft.fav_fruit);
        console.log("Birth Place: " + nft.Birth_Place);
        console.log("Eye Color: " + nft.Eye_Color + "\n");
        index++;
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
mintNFT("RISHABH JAIN", "Lychee", "India", "Black");
mintNFT("SAGAR JAIN", "Mango", "India", "Dark Brown");
mintNFT("NAMAN JAIN", "Apple", "India", "Grey");

listNFTs();
console.log("Total no. of minted NFTs:", getTotalSupply());


