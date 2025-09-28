'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface FlipCardProps {
  question: string;
  answer: string;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  className?: string;
}

export default function FlipCard({
  question,
  answer,
  category,
  difficulty = 'medium',
  className,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const difficultyColors = {
    easy: 'from-green-500/20 to-green-600/20',
    medium: 'from-yellow-500/20 to-yellow-600/20',
    hard: 'from-red-500/20 to-red-600/20',
  };

  const difficultyTextColors = {
    easy: 'text-green-600 dark:text-green-400',
    medium: 'text-yellow-600 dark:text-yellow-400',
    hard: 'text-red-600 dark:text-red-400',
  };

  return (
    <div
      className={cn(
        'group relative h-[400px] w-full max-w-[350px] [perspective:2000px]',
        className
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]'
        )}
      >
        {/* Front of card - Question */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-2xl',
            'bg-gradient-to-br from-white via-slate-50 to-slate-100',
            'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
            'border border-slate-200 dark:border-zinc-800/50',
            'shadow-lg dark:shadow-xl',
            'transition-all duration-700',
            'group-hover:shadow-xl dark:group-hover:shadow-2xl',
            'group-hover:border-primary/20 dark:group-hover:border-primary/30',
            isFlipped ? 'opacity-0' : 'opacity-100'
          )}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 dark:from-primary/10 via-transparent to-blue-500/5 dark:to-blue-500/10" />
          
          {/* Question content */}
          <div className="relative z-10 flex h-full flex-col p-6">
            {/* Header with category and difficulty */}
            <div className="mb-4 flex items-center justify-between">
              {category && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20">
                  {category}
                </span>
              )}
              <span
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-medium',
                  difficultyTextColors[difficulty],
                  `bg-gradient-to-r ${difficultyColors[difficulty]}`
                )}
              >
                {difficulty.toUpperCase()}
              </span>
            </div>

            {/* Question mark icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                <span className="text-2xl font-bold text-primary">?</span>
              </div>
            </div>

            {/* Question text */}
            <div className="flex-1 flex items-center justify-center">
              <h3 className="text-center text-lg font-semibold leading-relaxed text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-4px] dark:text-white">
                {question}
              </h3>
            </div>

            {/* Bottom hint */}
            <div className="mt-4 text-center">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Hover to reveal answer
              </p>
            </div>
          </div>
        </div>

        {/* Back of card - Answer */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-2xl p-6',
            'bg-gradient-to-br from-white via-slate-50 to-slate-100',
            'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
            'border border-slate-200 dark:border-zinc-800',
            'shadow-lg dark:shadow-xl',
            'flex flex-col',
            'transition-all duration-700',
            'group-hover:shadow-xl dark:group-hover:shadow-2xl',
            'group-hover:border-primary/20 dark:group-hover:border-primary/30',
            !isFlipped ? 'opacity-0' : 'opacity-100'
          )}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 dark:from-primary/10 via-transparent to-blue-500/5 dark:to-blue-500/10" />

          <div className="relative z-10 flex h-full flex-col">
            {/* Header with category and difficulty */}
            <div className="mb-4 flex items-center justify-between">
              {category && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20">
                  {category}
                </span>
              )}
              <span
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-medium',
                  difficultyTextColors[difficulty],
                  `bg-gradient-to-r ${difficultyColors[difficulty]}`
                )}
              >
                {difficulty.toUpperCase()}
              </span>
            </div>

            {/* Answer icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/20">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">✓</span>
              </div>
            </div>

            {/* Answer text */}
            <div className="flex-1 flex items-center justify-center">
              <h3 className="text-center text-lg font-semibold leading-relaxed text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-2px] dark:text-white">
                {answer}
              </h3>
            </div>

            {/* Bottom hint */}
            <div className="mt-4 text-center">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Move away to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
