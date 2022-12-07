import { Breadcrumbs } from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import FolderIcon from "@mui/icons-material/Folder"
// import { useNavigate } from "react-router-dom"

const CBreadcrumbs = ({
    icon,
    withDefautlIcon,
    size,
    className,
    items,
    separator,
    type = 'element',
}) => {
    // const navigate = useNavigate()

    const navigateHandler = (link, index) => {
        if (index === items?.length - 1) return null
        // navigate(link)
    }

    return (
        <div className="CBreadcrumbs-wrapper">
            <Breadcrumbs
                className={`CBreadcrumbs ${size} ${className}`}
                separator={separator}
            >
                {items?.map((item, index) => (
                    <div key={index} className={`breadcrumb-item ${type}`}>
                        {icon}
                        {withDefautlIcon && <FolderIcon />}
                        {type === "link" ? (
                            <div
                                onClick={() => navigateHandler(item.link, index)}
                                className={`breadcrumb-label ${index + 1 === items.length ? 'last' : ''}`}
                            >
                                {item.label}
                            </div>
                        ) : (
                            <div className={`breadcrumb-label ${index + 1 === items.length ? 'last' : ''}`}>{item.label}</div>
                        )}
                    </div>
                ))}
            </Breadcrumbs>
        </div>
    )
}

export default CBreadcrumbs