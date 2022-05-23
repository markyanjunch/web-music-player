import { Button, Space } from "antd";
import { CaretRightFilled, PauseOutlined, StepBackwardFilled, StepForwardFilled } from "@ant-design/icons";

function Controls(props) {
    return (
        <div className="controls">
            <Space size='large'>
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={<StepBackwardFilled />}
                    onClick={() => props.changeSong("backward")}
                />
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={props.isPaused ? <CaretRightFilled /> : <PauseOutlined />}
                    onClick={() => props.setIsPaused(!props.isPaused)}/>
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={<StepForwardFilled />}
                    onClick={() => props.changeSong("forward")}/>
            </Space>
        </div>
    );
}

export default Controls;