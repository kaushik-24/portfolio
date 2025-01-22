'use client'
import React, { FC } from 'react';
import styled from 'styled-components';

const Letter: FC = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          {/* Y Letter */}
          <path
            d="M 4,4 H 9 L 32,32 L 55,4 H 60 V 32 L 32,60 L 4,32 Z"
            stroke="url(#yGradient)"
            strokeWidth="4"
            fill="none"
            className="dash"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          {/* O Letter */}
          <path
            d="M 32,4
               A 28,28 0 1,1 32,60
               A 28,28 0 1,1 32,4 Z"
            stroke="url(#oGradient)"
            strokeWidth="4"
            fill="none"
            className="spin"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          {/* U Letter */}
          <path
            d="M 4,4 H 9 V 40
               A 23,23 0 0,0 55,40
               V 4 H 60 V 40
               A 28,28 0 0,1 4,40 Z"
            stroke="url(#uGradient)"
            strokeWidth="4"
            fill="none"
            className="dash"
          />
        </svg>

        <defs>
          {/* Gradients for Y, O, U */}
          <linearGradient id="yGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#973BED" />
            <stop offset="100%" stopColor="#007CFF" />
          </linearGradient>
          <linearGradient id="oGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC800" />
            <stop offset="100%" stopColor="#F0F" />
          </linearGradient>
          <linearGradient id="uGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E0ED" />
            <stop offset="100%" stopColor="#00DA72" />
          </linearGradient>
        </defs>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    gap: 1em;
    align-items: center;
  }

  .dash {
    animation: dashArray 2s ease-in-out infinite, dashOffset 2s linear infinite;
  }

  .spin {
    animation: spin 4s linear infinite, dashOffset 2s linear infinite;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 360;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Letter;

