import moduleContent from "../moduleContent.js";
import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { useRecoilState } from "recoil";
import { currentPageState } from "../atoms/currentPageState";

// Grid of modules
const HomeGrid = () => {
    const [currentModule, setCurrentModule] = useRecoilState(currentPageState);

    return (
        <>
        <Grid key="grid" container spacing={4}>
            {moduleContent.map((module) => {
                return (
                    <Fragment key={module.id}>
                        {/* Section title if onto new section (every four modules) */}
                        {module.id % 4 == 1 && <Grid item xs={12}><h1>{module.section}</h1></Grid>}
                        {/* Module grid item */}
                        <Grid item xs={3}>
                            <h4>{module.header}</h4>
                            <p>{module.body}</p>
                            <button onClick={() => { setCurrentModule(module.id)}}>
                                Click to open module
                            </button>
                        </Grid>
                    </Fragment>
                );
            })}
        </Grid>
        </>
    );
}

export default HomeGrid;
