import React from 'react';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';


TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            123
           
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;