/* chair = 3cft;
table = 10cft;
bed = 50cft; */

const totalWoodReq = (chairQuantity, tableQuantity, berQuantity) => {
    const perChairWoodReq = 3;
    const perTableWoodReq = 10;
    const perBedWoodReq =50;

    const totalChairWood = perChairWoodReq * chairQuantity;
    const totalTableWood = perTableWoodReq * tableQuantity;
    const totalBedWood = perBedWoodReq * berQuantity;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    console.log(totalWood);
}
totalWoodReq(2,2,5);