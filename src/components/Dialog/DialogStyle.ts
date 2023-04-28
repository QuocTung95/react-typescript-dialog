import styled from '@emotion/styled';
import { Modal } from 'antd';
export const DialogStyle = styled(Modal)`

.ant-modal-content {
    height: fit-content;
    width: fit-content;
    background: unset;
    box-shadow: unset;
    .ant-modal-close{
        top: 8px;
        right: 12px;
    }
}
.box.react-resizable{
    padding: 13px;
    background: #fff;
    .container-fluid.row {
        overflow: scroll;
    height: calc(100% - 100px);
    }
}
`;
