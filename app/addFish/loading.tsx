'use client'

import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function Loading() {
    return (
        <div className="h-screen flex justify-center items-center">
            <CircularProgress size="lg" aria-label="Ładowanie..." />
        </div>
    );
};
