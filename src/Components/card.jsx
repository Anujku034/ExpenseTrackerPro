import React from "react";

function Card({
  icon: Icon,
  title,
  amount,
  percentage,
  bottomText,
  cardColor,
  iconBg,
  iconColor,
}) {
  return (
    <div
      className={`
        flex
        h-40
        w-full
        flex-col
        justify-between
        rounded-2xl
        p-5
        ${cardColor}
      `}
    >

      {/* Icon */}
      <div
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          ${iconBg}
        `}
      >
        <Icon
          size={18}
          className={iconColor}
        />
      </div>

      {/* Title + Amount */}
      <div>

        <p className="text-xs text-slate-500">
          {title}
        </p>

        <p className="text-2xl font-bold text-slate-800">
          {amount}
        </p>

      </div>

      {/* Percentage */}
      <div className="flex items-center gap-1 text-xs">

        <span className={`font-semibold ${iconColor}`}>
          ↑ {percentage}
        </span>

        <span className="text-slate-400">
          {bottomText}
        </span>

      </div>

    </div>
  );
}

export default Card;