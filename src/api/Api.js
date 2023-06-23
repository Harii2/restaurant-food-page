import axios from "axios";

const Mapping = (array) => {
    return({
        name:array[0],
        type:array[1],
        category:array[2],
        description:array[3],
        price:array[4],
        veg_non_veg:array[5],
        price_for_drinks:array[6],
        glass:array[7],
        bottle:array[8],
        Bucket_12:array[9],
        can:array[10],
        pint:array[11],
        mixer_serving:array[12],
        location:array[13]
    })
}

export async function productsData() {
    try{
        const products = await axios.get(
            "https://sheets.googleapis.com/v4/spreadsheets/1qC6NfWy512SSpQCf6oj5eXFdVVosARmA0y-fKTSXd8M/values/Menu!A2:O?key=AIzaSyATQVItSM-apIG2zsnVIbwc_A_PXyh-_aY"
        );
        const values = products.data.values
        let finalData = [];
        values.forEach(element => {
            finalData.push(Mapping(element))
        });
        console.log(finalData)
        return finalData
    }
    catch(e){
        console.log(e)
        return [];
    }
    
}