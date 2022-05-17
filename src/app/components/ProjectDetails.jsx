import React, { useState, useEffect } from 'react';
import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { animated, useTransition } from 'react-spring';

function ProjectDetails(props) {
  const [casePage, setCasePage] = useState(false);
  const transition = useTransition(casePage, {
    from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 },
  });
  const { pictureUrl, name, sector, theChallenge, theSolution, theResults } = props;
  const AnimatedGrid = animated(Grid);

  useEffect(() => {
    setCasePage(true);
  }, [casePage]);

  return (
    <>
      {transition((style, item) =>
        casePage ? (
          <AnimatedGrid style={style} container spacing={6} sx={{ marginTop: 5 }}>
            <Grid item xs={10} sm={10} md={6} lg={6}>
              <img src={pictureUrl} alt={name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} sx={{ ml: 5 }}>
              <Typography variant="h3" color="#CAA85D">
                {name}
              </Typography>

              <Typography variant="subtitle" sx={{ color: '#CAA85D' }}>
                {sector}
              </Typography>
              <Divider sx={{ mb: 2, mt: 2 }} />

              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', color: '#CAA85D' }}>
                        The Challenge
                      </TableCell>
                      <TableCell sx={{ letterSpacing: 1, lineHeight: 1.5 }}>
                        {theChallenge}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', color: '#CAA85D' }}>
                        The Solution
                      </TableCell>
                      <TableCell sx={{ letterSpacing: 1, lineHeight: 1.5 }}>
                        {theSolution}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', color: '#CAA85D' }}>
                        The Results
                      </TableCell>
                      <TableCell sx={{ letterSpacing: 1, lineHeight: 1.5 }}>{theResults}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </AnimatedGrid>
        ) : null,
      )}
    </>
  );
}

export default ProjectDetails;
