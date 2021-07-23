export const getMovieBackground = (index) => {
  switch(index % 3) {
    case 0:
      return (
        `
          background: rgb(8,0,144);
          background: linear-gradient(90deg, rgba(8,0,144,1) 0%, rgba(9,9,121,1) 35%, rgba(0,155,186,1) 100%);
        `
      )
    case 1:
      return (
        `
          background: rgb(0,89,46);
          background: linear-gradient(90deg, rgba(0,89,46,1) 0%, rgba(46,164,76,1) 35%, rgba(0,189,123,1) 100%);
        `
      )
    case 2:
      return (
        `
          background: rgb(89,72,0);
          background: linear-gradient(90deg, rgba(89,72,0,1) 0%, rgba(164,153,46,1) 35%, rgba(189,162,0,1) 100%);
        `
      )
  }
}