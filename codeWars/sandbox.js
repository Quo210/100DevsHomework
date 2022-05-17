function countIslands(image){
    const hasXAdjacents = (outerIndex,innerIndex) => {
      let [leftIsland, rightIsland] = [false,false];
      if(innerIndex !== image[0].length-1) if(image[outerIndex][innerIndex+1] == 1) rightIsland = true;
      if(innerIndex !== 0) if(image[outerIndex][innerIndex-1] == 1) leftIsland = true;
      return [leftIsland,rightIsland];
    }
    const hasYAdjacents = (outerIndex,innerIndex) => {
        let [upperIsland, lowerIsland] = [false,false];
        if(outerIndex !== 0) if(image[outerIndex-1][innerIndex] == 1) upperIsland = true;
        if(outerIndex !== image.length-1) if(image[outerIndex+1][innerIndex] == 1) lowerIsland = true;
        return [upperIsland,lowerIsland];
    }
    const findPositives = () => {
        let [outer,inner] = [0,0];
        const positives = [];
        for (;outer < image.length;outer++){
            for(;inner < image[outer].length; inner++){
                if(image[outer][inner] == 1) positives.push([outer,inner])
            }
            inner = 0;
        }
        return positives
    }
    const findRelationships = (coords) => {
        const found = [];
        const [oc,ic] = [coords[0],coords[1]];
        const hasX = hasXAdjacents(oc,ic);
        const hasY = hasYAdjacents(oc,ic);
        if(hasX[0]) found.push(image[oc][ic-1]);
        if(hasX[1]) found.push(image[oc][ic+1]);
        if(hasY[0]) found.push(image[oc-1][ic]);
        if(hasX[1]) found.push(image[oc+1][ic]);
        return found
    }

    class Island{
        constructor(anchor,composed){
            this.anchor = anchor,
            this.composed = composed,
            mass = () => this.composed;
        }
    }

    const unlinkedPositives = findPositives();
    const linkedPositives = [];

    unlinkedPositives.forEach(coords => {
        const related = findRelationships(coords);
        if(related.length != 0){
            linkedPositives.push(coords);
            
        }
    })

}