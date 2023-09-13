import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function PaginationRounded() {
    return (
        <Pagination
            count={86}
            color="primary"
            shape="rounded"
            renderItem={(item) => (
                <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />
            )}
        />
    );
}