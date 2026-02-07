import { memo } from "react"

function TaskItem({ task }) {
    return (
        <li>{task}</li>
    )
}

export default memo(TaskItem, (prevProps, nextProps) => {
    return prevProps.task === nextProps.task;
});