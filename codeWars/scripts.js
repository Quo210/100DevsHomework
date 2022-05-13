
function saveRhino (arr) {
    const findLowest = (sample) => Array.from( sample ).sort((a,b) => a - b)[0];
    const findSecondLowest = (sample) => {
        const a = Array.from( sample ).sort( (a,b) => a - b );
        return (a[1])? a[1] : a[0]
    }
    const mainRoutes = arr.map(paths => {
        return findLowest(paths)
    });
    const alternateRoute = arr.map(paths => {
        return findSecondLowest(paths)
    });
    const optimalRoutes = [];
    for (let i = 0; i < 4; i++){
        const a =  [];
        a.push( mainRoutes[i], alternateRoute[i] )
        optimalRoutes.push(a);
    };

    const bestChance = mainRoutes.reduce((a,b) => (a > b)? a : b);
    const indexOfBestChance = mainRoutes.map(lowest => (lowest == bestChance)? true : false).indexOf(true);

    switch(indexOfBestChance){
        case 0:
            return 'North';
        case 1:
            return 'East';
        case 2:
            return 'South';
        case 3:
            return 'West';
    }
    
}