var findRestaurant = function (list1, list2) {
    let listobj = {};
    let min = Infinity;
    let newArr = [];
  
    for (let x = 0; x < list1.length; x++) {
      let item = list1[x];
      listobj[item] = x;
    }
  

    for (let x = 0; x < list2.length; x++) {
      let item = list2[x];
  
      if (listobj.hasOwnProperty(item)) {
        let sumIndex = listobj[item] + x;
  
        if (sumIndex < min) {
          min = sumIndex;
          newArr = [item]; 
        } else if (sumIndex === min) {
          newArr.push(item); 
        }
      }
    }
  
    return newArr;
  };
  
  console.log(findRestaurant(
    ["happy","sad","good"],
    ["sad","happy","good"]
  ));
  