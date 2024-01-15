import classes from "./MySelect.module.css";

export default function MySelect ({options, value, onChange}) {

    return (
        <select className={classes.mySelect} value={value} onChange={onChange}>
            {options.map(el =>
                <option key={el.value} value={el.value}>{el.name}</option>
            )}
        </select>
    )
}
