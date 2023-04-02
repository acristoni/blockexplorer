export default function RowBlockData({ title, info }) {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                paddingBottom: "7px"
            }}
        >
            <span
                style={{
                    fontWeight: 700,
                    minWidth: "30%",
                    paddingRight: "10px"
                }}
            >{title}</span>
            <span
                style={{
                    overflowX: "hidden"
                }}
            >{info}</span>
        </div>
    )
}