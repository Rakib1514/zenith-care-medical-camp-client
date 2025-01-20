import SectionHeading from "../../components/SectionHeading";
import useCampsData from "../../hooks/useCampsData";
import CampCard from "../../components/CampCard";
import HeadingLoading from "../../components/loading-components/HeadingLoading";
import CardLoading from "../../components/loading-components/CardLoading";
import { useEffect, useState } from "react";
import { Pagination, Input, Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import axiosPublic from "../../Utils/axiosPublic";
import { FaColumns } from "react-icons/fa";
import { BiColumns } from "react-icons/bi";
import { ScrollRestoration } from "react-router-dom";
const { Search } = Input;

const Camps = () => {
  const { campsData: initialCampData, isLoading } = useCampsData();
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemPerPage = 9;
  const [campsData, setCampsData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [twoColumn, setTwoColumn] = useState(false);

  useEffect(() => {
    setCampsData(initialCampData);
  }, [initialCampData]);

  const currentItems = campsData.slice(
    (page - 1) * itemPerPage,
    page * itemPerPage
  );

  const onPageChange = (page) => {
    setPaginationLoading(true);
    setTimeout(() => {
      setPaginationLoading(false);
      setPage(page);
    }, 700);
  };

  const onSearch = async (value) => {
    try {
      setSearchLoading(true);
      const res = await axiosPublic.get(`/search?v=${value}`);
      if (!res.data) {
        throw new Error("data not found");
      }
      setCampsData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleSort = async (value) => {
    if (value === "mostReg") {
      const sortedData = [...campsData].sort(
        (a, b) => b.participantCount - a.participantCount
      );
      setCampsData(sortedData);
    } else if (value === "feeZA") {
      const sortedData = [...campsData].sort((a, b) => b.fees - a.fees);
      setCampsData(sortedData);
    } else if (value === "feeAZ") {
      const sortedData = [...campsData].sort((a, b) => a.fees - b.fees);
      setCampsData(sortedData);
    } else if (value === "nameAZ") {
      const sortedData = [...campsData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCampsData(sortedData);
    } else if (value === "nameZA") {
      const sortedData = [...campsData].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setCampsData(sortedData);
    }
  };

  const items = [
    {
      key: "1",
      type: "group",
      label: "Sort By",
      children: [
        {
          key: "1-1",
          label: "Most Registered",
          onClick: () => handleSort("mostReg"),
        },
      ],
    },
    {
      key: "2",
      label: "By Fees",
      children: [
        {
          key: "2-1",
          label: "High to Low",
          onClick: () => handleSort("feeZA"),
        },
        {
          key: "2-2",
          label: "Low to High",
          onClick: () => handleSort("feeAZ"),
        },
      ],
    },
    {
      key: "3",
      label: "By Name",

      children: [
        {
          key: "3-1",
          label: "A - Z",
          onClick: () => handleSort("nameAZ"),
        },
        {
          key: "3-2",
          label: "Z - A",
          onClick: () => handleSort("nameZA"),
        },
      ],
    },
  ];

  if (isLoading) {
    return (
      <>
      <ScrollRestoration/>
        <div className="pt-6">
          <HeadingLoading />
        </div>
        <CardLoading />
        <CardLoading />
      </>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-6 mb-24">
        <div>
          <SectionHeading
            subHeading="Find the Perfect Camp for Your Health and Wellness"
            heading="Explore Our Camps"
          />
          <div className="my-4 flex justify-between items-center">
            <div>
              <Search
                loading={searchLoading}
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                  width: 200,
                }}
              />
              <Button
                onClick={() => setCampsData(initialCampData)}
                className="mx-1"
              >
                Reset
              </Button>
            </div>
            <div className="cursor-pointer flex items-center justify-center gap-2">
              <div className="hidden lg:flex">
                <Button onClick={() => setTwoColumn(!twoColumn)}>
                  {twoColumn ? <BiColumns /> : <FaColumns />}
                </Button>
              </div>
              <Dropdown
                onChange={handleSort}
                menu={{
                  items,
                }}
              >
                <a>
                  <Space>
                    Sort
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
        {paginationLoading ? (
          <div className="min-h-svh">
            <CardLoading />
            <CardLoading />
          </div>
        ) : currentItems.length ? (
          <div
            className={`grid ${
              twoColumn ? "lg:grid-cols-2" : "lg:grid-cols-3"
            } md:grid-cols-2 grid-cols-1 gap-6 campCardContainer`}
          >
            {currentItems.map((camp, idx) => (
              <CampCard idx={idx} key={camp._id} camp={camp} />
            ))}
          </div>
        ) : (
          <div className="min-h-svh">
            <h2 className="uppercase text-center font-semibold text-3xl py-8">
              No Data found
            </h2>
          </div>
        )}
        <div className="mt-8 flex justify-center items-center">
          <Pagination
            current={page}
            total={campsData.length}
            pageSize={itemPerPage}
            onChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Camps;
