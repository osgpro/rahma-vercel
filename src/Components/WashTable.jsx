import React from "react";
import { ReactComponent as Icon1 } from "../Assets/svgs/all-icons/tablewashicons-02.svg";
import { ReactComponent as Icon2 } from "../Assets/svgs/all-icons/tablewashicons-03.svg";
import { ReactComponent as Icon3 } from "../Assets/svgs/all-icons/tablewashicons-04.svg";
import { ReactComponent as Icon4 } from "../Assets/svgs/all-icons/tablewashicons-05.svg";
import { ReactComponent as Icon5 } from "../Assets/svgs/all-icons/tablewashicons-06.svg";

const WashTable = ({ data }) => {
    return (
        <>
            <div className="container" style={{ padding: "4rem 0" }}>
                <h1 className="h1-styles" style={{ padding: "0 1rem" }}>
                    WATER WELL <span>PROJECTS</span>
                </h1>
                <h1 style={{ color: "#2b3990", fontWeight: "bold", padding: "0 1rem" }}>
                    AFRICA
                </h1>
                <div className="wash_Table">
                    <div className="Table_icons">
                        <Icon1 />
                        <Icon2 />
                        <Icon3 />
                        <Icon4 />
                        <Icon5 />
                    </div>
                    <table>
                        <tr>
                            <th>COUNTRY</th>
                            <th>TYPE</th>
                            <th>LIFE SPAN</th>
                            <th>COST</th>
                            <th>BENEFICIARIES</th>
                        </tr>
                    </table>

                    {data.map((el) => (
                        <div className="d-flex flex-column" key={el.id}>
                            <table>
                                {el.table_datas.length > 1 ? (
                                    <>
                                        {el.table_datas.map((item, index) => (
                                            <>
                                                {index === 1 ? (
                                                    <tr>
                                                        {/* <th></th> */}
                                                        <td>{item.type}</td>
                                                        <td>{item.life_span}</td>
                                                        <td>${item.cost}</td>
                                                        <td>{item.beneficiaries}</td>
                                                    </tr>
                                                ) : (
                                                    <tr>
                                                        <th rowSpan={el.table_datas.length} style={{ borderBottom: "none" }}>
                                                            {el.country}
                                                        </th>
                                                        <td>{item.type}</td>
                                                        <td>{item.life_span}</td>
                                                        <td>${item.cost}</td>
                                                        <td>{item.beneficiaries}</td>
                                                    </tr>
                                                )}
                                            </>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {el.table_datas.map((item, index) => (
                                            <>
                                                {index === 1 ? (
                                                    <tr>
                                                        {/* <th></th> */}
                                                        <td>{item.type}</td>
                                                        <td>{item.life_span}</td>
                                                        <td>${item.cost}</td>
                                                        <td>{item.beneficiaries}</td>
                                                    </tr>
                                                ) : (
                                                    <tr>
                                                        <th style={{ borderBottom: "none" }}>
                                                            {el.country}
                                                        </th>
                                                        <td>{item.type}</td>
                                                        <td>{item.life_span}</td>
                                                        <td>${item.cost}</td>
                                                        <td>{item.beneficiaries}</td>
                                                    </tr>
                                                )}
                                            </>
                                        ))}
                                    </>
                                )}
                            </table>
                            <a href={el.donation_url}>DONATE NOW</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WashTable;
