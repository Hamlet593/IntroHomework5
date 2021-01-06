Given the list of the following readers:

let books = [
  {
    book: "Catcher in the Rye",
    readStatus: true,
    percent: 40,
  },
  {
   book: "Animal Farm",
   readStatus: true,
   percent: 20,
  },
  { book: "Solaris",
   readStatus: false,
   percent: 90
  },
  {
    book: "The Fall",
    readStatus: true,
    percent: 50
  },
  {
   book: "White Nights",
   readStatus: false,
   percent: 60
  },
  {
    book: "After Dark",
    readStatus: true,
    percent: 70
  },
];

Output the books sorted by the percent in descending order which readStatus is true.

Solution

let books = [
  {
    book: "Catcher in the Rye",
    readStatus: true,
    percent: 40,
  },
  {
   book: "Animal Farm",
   readStatus: true,
   percent: 20,
  },
  { book: "Solaris",
   readStatus: false,
   percent: 90
  },
  {
    book: "The Fall",
    readStatus: true,
    percent: 50
  },
  {
   book: "White Nights",
   readStatus: false,
   percent: 60
  },
  {
    book: "After Dark",
    readStatus: true,
    percent: 70
  },
];
function percentTrue(books){
  books.sort(function(a, b){
    if(a.percent < b.percent){
      return -1
    }
    else if(a.percent > b.percent){
      return 1
    }
    return 0
  }).filter(function(item){
    if(item.readStatus === true){
      console.log(item)
    }
  })

}
percentTrue(books);