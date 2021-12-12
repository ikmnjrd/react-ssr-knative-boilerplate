import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import html from '../views/pages/test/html';
import Sample from '../views/components/Sample/Sample';

export default (req: express.Request, res: express.Response)  => {
    const sample = renderToString(React.createElement(Sample));

    res.send(
      html({
        sample
      })
    );
}