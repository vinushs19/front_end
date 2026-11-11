function Try({v1,v2}){
console.log({v1,v2});
let na=v2;
let add=0;
let nn=[true,false,true,false];
    return (<div className="Try"> 
        <h3 className="Try_h3">{v1} </h3>

        <button className="Try_btn" onClick={
            ()=>{
                add++;
            console.log(`${na} clicked`);
            console.log(`${na} has ${add} `);
            console.log(`${nn[0]} `);
            if(nn[0]===true){
                nn[0]=nn[1];
            }
            else if(nn[0]===false){
                nn[0]=nn[2];
            }
            console.log(`${nn[0]} `);
            }
            }>{v2}</button>
    </div >)

}

export default Try;