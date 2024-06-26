import React from 'react'
import Row from '../Row/Row'
import requests from "../../../utils/requests"
function RowList() {
  return (
    <>
        <Row
          title = "NETFLIX ORIGINALS"
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow={true}
        />

        {/* <Row
          title = "Trending New"
          fetchUrl = {requests.fetchTrending}
        /> */}

<Row
          title = "Top Rated Movies"
          fetchUrl = {requests.fetchTopRatedMovies}
        />
<Row
          title = "Action Movies"
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
<Row
          title = "ComedyMovies "
          fetchUrl = {requests.fetchComedyMovies}
          isLargeRow={true}
        />
<Row
          title = "Horror Movies "
          fetchUrl = {requests.fetchHorrorMovies}
          isLargeRow={true}
        />
<Row
          title = "Romance Movies"
          fetchUrl = {requests.fetchRomanceMovies}
          isLargeRow={true}
        />
<Row
          title = "Documentaries"
          fetchUrl = {requests.fetchDocumentaries}
          isLargeRow={true}
        />
    </>
  )
}

export default RowList