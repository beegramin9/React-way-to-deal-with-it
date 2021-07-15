import * as CryptoJS from "crypto-js"

class Block {
    public index : number;
    public hash : string;
    public previousHash : string;
    public data : string;
    public timestamp : number;

    /* static method: 클래스 블록 안에 있지만
    클래스가 생성되지 않았어도(const block = new Block 처럼 instantitation이 안 됐어도) 클래스 바깥에서 불러낼 수 있음 */
    // 블록의 해쉬 만들기
    static calculateBlockHash = (
        index:number, 
        previousHash: string, 
        timestamp : number,
        data : string
        ) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

    // 블록 구조를 검증, true/false 값을 리턴
    static validateStructure = (aBlock: Block) : boolean => {
        return (
            typeof aBlock.index === "number" && 
            typeof aBlock.hash === "string"  && 
            typeof aBlock.previousHash === "string" &&
            typeof aBlock.timestamp === "number" &&
            typeof aBlock.data === "string"
        )
    }


    constructor(
        index : number,
        hash : string,
        previousHash : string,
        data : string,
        timestamp : number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    } 
}

/* static method라서 가능함 */
// Block.calculateBlockHash


const genesisBlock : Block = new Block(0,"202020202020","","Hello",123456)
/* 블록체인은 블록으로 이뤄진 Array 
이렇게 쓰면 Block만 들어갈 수 있음 */

let blockchain: Block[] = [genesisBlock]
// blockchain.push("stuff")

const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)

const createNewBlock = (data: string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const nextTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, nextTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, nextTimestamp )
    /* 새로운 블록이 만들어질 때마다 블록체인에 더해줘야 함 */
    addBlock(newBlock);
    
    return newBlock
}

// console.log(createNewBlock("hello"), createNewBlock('bye bye') );
/* 지금 블록에 블록을 더하는 체인이 아니라 블록을 한개만 가진 서로 다른 블록체인을 만든 것
그래서 둘 다 인덱스가 1로 나온다. */

const getHashForBlock = (aBlock:Block) :string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data)


/* 블록 Validation */

const isBlockValid = (currentBlock/* 현재 블록 */: Block, previousBlock/* 이전 블록 */: Block): boolean => {
    if (!Block.validateStructure(currentBlock)) {
      return false;
    } else if (previousBlock.index + 1 !== currentBlock.index) {
      return false;
        /* 해쉬가 같은지만 보는 것 */
    } else if (previousBlock.hash !== currentBlock.previousHash) {
      return false;
        /* 해쉬가 제대로 들어갔는지 보는 것
        그러면 해쉬를 얻는 함수부터 만들어야지?
        getHashForBlock 함수 */
    } else if (getHashForBlock(currentBlock) !== currentBlock.hash) {
      return false;
    } else {
      return true;
    }
  };

const addBlock = (currentBlock: Block) : void => {
    /* 마지막으로 블록을 블록체인에 더해주면 됨 */
        if(isBlockValid(currentBlock,getLatestBlock())) {
            blockchain.push(currentBlock)
        } 
    }



createNewBlock("second block")
createNewBlock("third block")
createNewBlock("fourth block")
createNewBlock("fifth block")
createNewBlock("sixth block")
createNewBlock("seventh block")


console.log(blockchain)

export {};