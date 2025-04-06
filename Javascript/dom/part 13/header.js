let url=" https://icanhazdadjoke.com/"

async function getJokes(){
    try{
        let config={headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
        console.log(res.data.joke);

    }
    catch(err){
        console.log("Error:",err);
    }

}
