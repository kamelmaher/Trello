import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { General } from '../../types/General'
import { useAppContext } from '../../Context/useAppContext'
type FormTaskProps = {
    column: General,
    handleDeleteColumn: () => void
}
const FormTask = ({ column, handleDeleteColumn }: FormTaskProps) => {
    const style = { flex: "1", border: "1px solid var(--light)" }
    const [newTitle, setNewTitle] = useState(column.title)
    const { updateColumn } = useAppContext()
    return (
        <li className="d-flex align-items-center gap-2 mb-2">
            <input
                type="text"
                value={newTitle}
                className="pt-1 pb-1 ps-3 rounded"
                style={style}
                onBlur={() => {
                    updateColumn(column, newTitle)
                }}
                onChange={e => setNewTitle(e.target.value)}
            />
            <p className="fs-5 pointer" style={{ color: "var(--primary)" }} onClick={handleDeleteColumn}>
                <IoMdClose />
            </p>
        </li >
    )
}

export default FormTask
