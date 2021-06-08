
import React from 'react';
import App from '../pages/search';
import { MockedProvider } from '@apollo/react-testing';
import { render, cleanup } from "@testing-library/react";
import { GET_USERS } from '../hooks/getUsers'

const mocks = [
    {
        request: {
            query: GET_USERS
        },
        result: {
            data: {
                "users": {
                    "edges": [
                        {
                            "node": {
                                "id": "ppaf8ojpph",
                                "name": "Willa Jast",
                                "title": "Mr.",
                                "avatar": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E",
                                "empId": "1",
                                "jobTitle": "Corporate Markets Administrator",
                                "jobDesc": "Et qui quia odio et.\nEligendi in deserunt.\nHarum sit odio quia vitae provident quo provident.\nHarum ullam pariatur quos est quod.",
                                "companyName": "Hermiston - Reichert"
                            }
                        },
                        {
                            "node": {
                                "id": "h5f2bwfrwo",
                                "name": "Jillian Kohler",
                                "title": "Dr.",
                                "avatar": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E",
                                "empId": "b",
                                "jobTitle": "Product Paradigm Analyst",
                                "jobDesc": "Nobis et sint magnam aut atque.\nMaiores incidunt occaecati iusto laborum facere.\nDeleniti dolorem quibusdam.\nVeniam perspiciatis et nisi aut corporis laboriosam.",
                                "companyName": "Pfeffer - Parisian"
                            }
                        },
                        {
                            "node": {
                                "id": "866hk73iv5",
                                "name": "Mitchel Ziemann",
                                "title": "Mrs.",
                                "avatar": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E",
                                "empId": "r",
                                "jobTitle": "Product Infrastructure Analyst",
                                "jobDesc": "Minima sequi voluptas optio.\nVoluptatem excepturi eligendi.\nIste eius iure commodi molestiae at voluptas quo ex reprehenderit.\nIncidunt corporis vel.",
                                "companyName": "Lowe - Purdy"
                            }
                        },
                        {
                            "node": {
                                "id": "cvi1nj384v",
                                "name": "Maida Dickinson",
                                "title": "Mr.",
                                "avatar": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E",
                                "empId": "z",
                                "jobTitle": "Forward Configuration Designer",
                                "jobDesc": "Cum ipsam consequatur ex accusamus ipsum.\nEum inventore laboriosam deleniti omnis occaecati.\nCulpa occaecati nemo alias et doloribus expedita.\nUt quia ut nostrum ducimus occaecati veniam ut exercitationem voluptatibus.",
                                "companyName": "Gerhold - Rau"
                            }
                        },
                        {
                            "node": {
                                "id": "2f07vgwj73",
                                "name": "Mrs. Reanna Walter",
                                "title": "Dr.",
                                "avatar": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E",
                                "empId": "2",
                                "jobTitle": "Senior Mobility Architect",
                                "jobDesc": "Molestias ab esse impedit aliquam quo vel dolorem.\nDolor consequatur quis nobis nemo asperiores nam ea aut.\nNam corrupti necessitatibus quas.\nEa odio sit odio quae voluptas id error.",
                                "companyName": "Bogan Group"
                            }
                        }
                    ],
                    "pageInfo": {
                        "endCursor": "2f07vgwj73",
                        "hasNextPage": true
                    }
                }
            },
        },
    }
];

afterEach(cleanup);

test('renders without error with snapshot', async () => {
    const { findByText, asFragment, getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>,
    );
    expect(getByText("Loading...")).toBeInTheDocument();

    const buttonTag = await findByText("Home");
    expect(buttonTag).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();

    expect(getByText(/Willa Jast/i)).toBeInTheDocument();
});

