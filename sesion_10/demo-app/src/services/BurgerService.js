export async function all() {
    const url = "https://api.mlab.com/api/1/databases/mean-mx/collections/burgers?apiKey=ayRRQWTsfrXOpE8za6m5FlXBXXPytqSf";
    
    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error("Falló la obtención de datos");
    }

    return await response.json();;
}