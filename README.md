# datagica-languages

## Overview

A database of common language codes and names.

You can have a look, or directly use the database if you want to.
It is located in `data/all-languages.json`

There is also a node module which exposes languages with a valid IETF tag.

This database is not complete yet: so far it only covers 550 languages,
and only 59 IETF-tagged languages, a fraction of what is in the ISO 639-3 database
(7776 entries).

If you find this project useful and think you can contribute, do not hesitate
to submit a pull request to fix this.


## Description of fields
- name: language name in other languages (eg. Spanish is "Espagnol" in French)
- aliases: some languages may have multiple synonyms
- ietf: IETF language tag
- iso_639_1: ISO 639-1 code
- iso_639_2: ISO 639-2 code
- iso_639_3: ISO 639-3 code
- description: a short description of the language

## A few words of advice

If you are a fellow application developer, I recommend using IETF tags:
these are designed by the Internet Engineering Task Force and are used by
the WWW, ANSI and ECMA organizations and consortiums.

If you still want to look into ISO 639, you should know that there are 3 different
versions of it, sometimes with conflicting codes:

```
(French)    ISO 639-1: "fr"   ISO 639-2: "fre/fra"  ISO 639-3: "fra"
(Japanese)  ISO 639-1: "ja"   ISO 639-2: "jpn"      ISO 639-3: "jpn"
(Spanish)   ISO 639-1: "es"   ISO 639-2: "spa"      ISO 639-3: "spa"
(Cantonese) ISO 639-1: "zh"   ISO 639-2: "zho"      ISO 639-3: "yue"
(Mandarin)  ISO 639-1: "zh"   ISO 639-2: "zho"      ISO 639-3: "cmn"
```

ISO 639-1 is simple, but fails to express chinese dialects correctly.

ISO 639-2 is really confusing in my opinion (yes, I'm french), while still
incomplete (eg. chinese).

Finally, ISO 639-3 is designed to "cover all known natural languages", so on
the paper it's great, but it's big and heavy (we are talking about tens of
thousand of different dialects), and it uses 3-letters code instead of the
familiar 2-letters codes.

Now ask yourself the question: do you really need to cover Old English,
Ancient Babylonian or hieroglyphs?

Here are some IETF tags for comparison (pretty similar to 639-1 by the way):

```
(French)    IETF: "fr"
(Japanese)  IETF: "ja"
(Spanish)   IETF: "es"
(Cantonese) IETF: "zh-yue"
(Mandarin)  IETF: "zh-cmn"
```

These are the code in use in HTML, XML, Unicode standards.. so really, you will
not make a mistake by using it in a real world software app.

It is well suited to today's applications and currently spoken languages.


## Some useful links:

IANA language subtag registry (used by http and unicode):
http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

A question in StackOverflow:
https://stackoverflow.com/questions/3217492/list-of-language-codes-in-yaml-or-json/20623472#20623472
