import React from 'react';
import { lazy, Suspense } from "react";
import useDetail from "../../redux/useHook/useDetail";
import useDidMountEffect from "../useDidMountEffect";
import { Badge, Card, Col, Row } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

const AsyncImageComponent = lazy(() => import("../Image/Image"));

interface Props {
}
const TopRate: React.FC<Props> = ({ }) => {
  const { id } = useParams()
  const { actions, data, dataSingleMovieCredits } = useDetail();
  const movieData = data || {}
  const movieCrewData = dataSingleMovieCredits?.crew || []
  const movieCastData = dataSingleMovieCredits?.cast || []
  const job = ["director", "producer"]
  const img_url = "http://image.tmdb.org/t/p/w500";

  console.log('movieCastData', movieCastData)

  useDidMountEffect(() => {
    actions.fetchDetail(id);
    actions.fetchSingleMovieCredits(id)
  }, []);

  const SingleProduct = (item: any) => <div style={{ color: '#6c541c', margin: '5px', borderRadius: '5px', backgroundColor: '#a4a29d' }}> <VideoCameraOutlined /> {item.item.job} : {item.item.name}</div>

  return (
    <>
      <Row gutter={24}>
        <Col className="gutter-row" span={8} >
          <Suspense fallback={<div>Loading...</div>}>
            <Card
              hoverable
              cover={
                <AsyncImageComponent
                  src={`${img_url}${movieData?.poster_path}`}
                  alt="image poster"
                />
              }
            >
            </Card>
          </Suspense>
        </Col>

        <Col className="gutter-row" span={16} >
          <h3 >Movie Name: {movieData?.title}</h3>
          <h5>Overview: </h5>
          <h6 className="col-sm-8 justif-content-center my-2">{movieData?.overview}</h6>
          <h6>Movie Released Date:<span>{movieData?.release_date}</span></h6>
          <h6 >Genre:{movieData?.genres?.map((item: any, index: number) => <Badge color='#faad14' key={index} count={item.name} />)}</h6>
          <h6>Crew:</h6>
          <div style={{ display: 'flex' }}>
            {
              movieCrewData?.filter((item: any) => job.includes(item.job.toLowerCase()))
                .map((item: any, index: number) => <SingleProduct item={item} />)
            }
          </div>

        </Col>

      </Row>

    </>
  );
}

export default TopRate;
