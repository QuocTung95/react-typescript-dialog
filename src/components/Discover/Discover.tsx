import React from 'react';
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import useDiscover from "../../redux/useHook/useDiscover";
import useSearch from "../../redux/useHook/useSearch";
import useDidMountEffect from "../../components/useDidMountEffect";
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const AsyncImageComponent = lazy(() => import("../Image/Image"));

interface Props {
}

const Discover: React.FC<Props> = ({ }) => {
  const { actions, data: discoverData, loading } = useDiscover();
  const { data: searchData } = useSearch();

  const img_url = "http://image.tmdb.org/t/p/w500";
  useDidMountEffect(() => {
    actions.fetchList();
  }, []);
  const data = searchData.length > 0 ? searchData : discoverData
  return (
    <>
      <h1 className='offset-1'>Discover</h1>

      <div className="container-fluid row ">
        <Row gutter={24}>
          {

            data.map((item: any, index: number) => (
              <Col className="gutter-row" span={6} key={index} xs={20} sm={24} md={12} lg={8} xl={6} >
                <div key={index} className="col-sm-4 mb-2">
                  <Link to={`/movie/${item.id} `} style={{ color: '#323232', textDecoration: 'none' }}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Card
                        hoverable
                        cover={
                          <AsyncImageComponent
                            src={`${img_url}${item.poster_path}`}
                            alt={item.title}
                          />
                        }
                      >
                        <Meta title={item.title} description={item.release_date} />
                      </Card>
                    </Suspense>

                  </Link>

                </div>
              </Col>


            ))
          }
        </Row>

      </div>

    </>
  );
}

export default Discover;
