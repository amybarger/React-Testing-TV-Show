import React from "react";
import App from './App';
import {render, waitFor} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import userEvent from '@testing-library/react'
import axios from "axios";

export const fetchShow = () => {
    return axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log("error fetching data from api, err: ", err.message);
            return err;
        })
}

// jest.mock("./api/fetchShow");

// const shows = {data: {
//     image: { original: "original"},
//     name: "EP1",
//     summary: "<p>Episode 1</p>",
//     _embedded: {
//         episodes: [{
//             id: "1",
//             image: { medium: "medium_image"},
//             name: "Episode 1",
//             season: 1,
//             number: 3,
//             summary: "<p>Episode 1</p>",
//             runtime: 60
//         }]
//     }
//   }
// }
const seasonData = {_embedded:  {
    episodes: [{
    id: 909344,
    url: 'http://www.tvmaze.com/episodes/909344/stranger-things-2x04-chapter-four-will-the-wise',
    name: 'Chapter Four: Will the Wise',
    season: 2,
    number: 4,
    airdate: '2017-10-27',
    airtime: '',
    airstamp: '2017-10-27T12:00:00+00:00',
    runtime: 60,
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/132/332045.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/132/332045.jpg'
    },
    summary: '<p>After his encounter with the shadow creature, Will\'s condition worsens. Meanwhile, Jim and El fight after Jim discovers that El disobeyed the rules, and Owens brings Nancy and Jonathan to Hawkins Labs for a chat.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/909344'
      }
    }},
    {
        id: 578666,
        url: 'http://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat',
        name: 'Chapter Five: The Flea and the Acrobat',
        season: 1,
        number: 5,
        airdate: '2016-07-15',
        airtime: '',
        airstamp: '2016-07-15T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg'
        },
        summary: '<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/578666'
          }
        }
      },
    ]

}}

test("App fetches show data and renders it",
async () => {
    // mockFetchShow.mockResolvedValueOnce(shows);
    const { getAllByTestId } =
    render(<App />);

    await waitFor(() => {
        expect(getAllByTestId("episode")).toHaveLength(3);
    })
})

